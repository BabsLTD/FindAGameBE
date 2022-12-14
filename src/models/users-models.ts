import db from "../db/connection";
import User from "../db/data/users-test";

import { checkExist } from "../utils/checkExist";

export const fetchUserById = (firebase_id: string) => {
  return db
    .query(
      `SELECT *
  FROM users
  WHERE users.firebase_id = $1`,
      [firebase_id]
    )
    .then((result) => {
      if (result.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: `User not found for user_id: ${firebase_id}`,
        });
      }

      return result.rows[0];
    });
};

export const postNewUser = (body: User) => {
  if (
    !body.firebase_id ||
    !body.name ||
    !body.username ||
    !body.age ||
    !body.gender ||
    !body.profile_icon ||
    !body.skills_level ||
    !body.rating ||
    !body.event_id
  ) {
    return Promise.reject({
      status: 400,
      msg: `Invalid - input must be in form {firebase_id: string,
        name: string,
        username: string,
        age: number,
        gender: string,
        profile_icon: string,
        skills_level: string,
        rating: number,
        event_id: number}`,
    });
  }
  return db
    .query(
      `INSERT INTO users
        (firebase_id, name, username, age, gender, profile_icon, skills_level, rating, event_id)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING * ;
        `,
      [
        body.firebase_id,
        body.name,
        body.username,
        body.age,
        body.gender,
        body.profile_icon,
        body.skills_level,
        body.rating,
        body.event_id,
      ]
    )
    .then((newUser) => {
      return newUser.rows[0];
    })
    .catch((err) => console.log(err));
};

export const updateUser = (body: User) => {
  if (
    !body.firebase_id ||
    !body.name ||
    !body.username ||
    !body.age ||
    !body.gender ||
    !body.profile_icon ||
    !body.skills_level ||
    !body.rating ||
    !body.event_id
  )
    return Promise.reject({
      status: 400,
      msg: `Invalid - input must be in form {firebase_id: string,
        name: string,
        username: string,
        age: number,
        gender: string,
        profile_icon: string,
        skills_level: string,
        rating: number,
        event_id: number}`,
    });
  return checkExist("users", "firebase_id", body.firebase_id)
    .then(() => {
      return db.query(
        `UPDATE users SET name=$2, username=$3, age=$4, profile_icon=$5, skills_level=$6, rating=$7
      WHERE firebase_id=$1 RETURNING *
      `,

        [
          body.firebase_id,
          body.name,
          body.username,
          body.age,
          body.profile_icon,
          body.skills_level,
          body.rating,
        ]
      );
    })
    .then((newUser) => {
      if (newUser.rowCount === 0) {
        return Promise.reject({
          status: 404,
          msg: `user ${body.firebase_id} - does not exist`,
        });
      }
      return newUser.rows[0];
    });
};

export const bookEvent = (firebase_id: string, event_id: string) => {
  return checkExist("users", "firebase_id", firebase_id)
    .then(() => {
      return checkExist("events", "event_id", event_id).then(() => {
        return db
          .query(
            `UPDATE events SET needed_players = needed_players-1 WHERE event_id = $1;`,
            [event_id]
          )
          .then(() => {
            return db.query(
              `INSERT INTO userevents (firebase_id, event_id) VALUES ($1,$2) RETURNING *`,
              [firebase_id, event_id]
            );
          });
      });
    })
    .then((result) => {
      return result.rows[0];
    });
};
export const fetchUserEvents = (firebase_id: String) => {
  return db
    .query(`SELECT * FROM userevents JOIN events ON userevents.event_id = events.event_id WHERE userevents.firebase_id = $1;`, [firebase_id])
    .then((result) => {
      return result.rows;
    });
};
