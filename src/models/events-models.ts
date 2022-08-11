import db from "../db/connection";

export const fetchEvents = (query) => {
  // const validQeries = ["football", "netball", "squash","male", "female", "mixed","18-30", "30-50", "50+", "ASC","DESC","asc","desc"]
  const validOrders = ["ASC", "DESC", "asc", "desc"];

  let qeuryStr = "SELECT * FROM events WHERE 1 = 1";

  if (query) {
    if (Object.keys(query).includes("category")) {
      qeuryStr += ` AND category = '${query.category}'`;
    }
    if (Object.keys(query).includes("age_group")) {
      qeuryStr += ` AND age_group = '${query.age_group}'`;
    }
    if (Object.keys(query).includes("gender")) {
      qeuryStr += ` AND gender = '${query.gender}'`;
    }
  }
  if (query.order && validOrders.includes(query.order)) {
    qeuryStr += ` ORDER BY time ${query.order}`;
  } else if (!query.order) {
    qeuryStr += ` ORDER BY time ASC`;
  }

  return db.query(qeuryStr).then((result) => {
    return result.rows;
  });
};

export const addEvent = (
  firebase_id,
  category,
  date,
  time,
  duration,
  gender,
  skills_level,
  location,
  needed_players,
  age_group,
  cost
) => {
  return db
    .query(
      `INSERT INTO events
        (firebase_id, category, date, time, duration, gender,
        skills_level, location, needed_players, age_group, cost) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
        RETURNING *;`,
      [
        firebase_id,
        category,
        date,
        time,
        duration,
        gender,
        skills_level,
        location,
        needed_players,
        age_group,
        cost,
      ]
    )
    .then(({ rows }) => {
      return rows[0];
    });
};

export const fetchEventById = (event_id) => {
  if (isNaN(Number(event_id))) {
    return Promise.reject({
      status: 400,
      msg: `Invalid event ID ${event_id}`,
    });
  }
  return db
    .query(
      `SELECT *
    FROM events
    WHERE events.event_id = $1 
    `,
      [event_id]
    )
    .then((result) => {
      if (result.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: `Event not found for event_id: ${event_id}`,
        });
      }
      return result.rows[0];
    });
};
