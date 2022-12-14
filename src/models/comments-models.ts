import db from "../db/connection";
import { checkExist } from "../utils/checkExist";
export const fetchCommentsBYEventsId = (event_id: string) => {
  if (isNaN(Number(event_id))) {
    return Promise.reject({
      status: 400,
      msg: `invalid event id ${event_id}`,
    });
  }
  return db
    .query("SELECT * FROM comments WHERE event_id = $1", [event_id])
    .then((result) => {
      if (!result.rowCount) {
        return Promise.reject({
          status: 404,
          msg: `event id ${event_id} does not exist`,
        });
      }
      return result.rows;
    });
};

export const addCommentBYEventsId = (
  event_id: string,
  firebase_id: string,
  comment_body: string,
  comment_time: string
) => {
  if (comment_body === "") {
    return Promise.reject({
      status: 400,
      msg: `cannot post empty comment`,
    });
  }
  return checkExist("events", "event_id", event_id).then(() => {
    return db
      .query(
        `INSERT INTO comments
        (event_id, firebase_id, comment_body, comment_time) VALUES ($1, $2, $3, $4) 
        RETURNING *`,
        [event_id, firebase_id, comment_body, comment_time]
      )
      .then((result) => {
        return result.rows[0];
      });
  });
};
