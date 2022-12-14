"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentBYEventsId = exports.fetchCommentsBYEventsId = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const checkExist_1 = require("../utils/checkExist");
const fetchCommentsBYEventsId = (event_id) => {
    if (isNaN(Number(event_id))) {
        return Promise.reject({
            status: 400,
            msg: `invalid event id ${event_id}`,
        });
    }
    return connection_1.default
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
exports.fetchCommentsBYEventsId = fetchCommentsBYEventsId;
const addCommentBYEventsId = (event_id, firebase_id, comment_body, comment_time) => {
    if (comment_body === "") {
        return Promise.reject({
            status: 400,
            msg: `cannot post empty comment`,
        });
    }
    return (0, checkExist_1.checkExist)("events", "event_id", event_id).then(() => {
        return connection_1.default
            .query(`INSERT INTO comments
        (event_id, firebase_id, comment_body, comment_time) VALUES ($1, $2, $3, $4) 
        RETURNING *`, [event_id, firebase_id, comment_body, comment_time])
            .then((result) => {
            return result.rows[0];
        });
    });
};
exports.addCommentBYEventsId = addCommentBYEventsId;
