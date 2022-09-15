"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getS3UploadUrl = void 0;
const s3_1 = require("../models/s3");
const getS3UploadUrl = (req, res, next) => {
    (0, s3_1.s3UploadUrl)()
        .then((url) => {
        res.send({ url });
    })
        .catch((err) => {
        next(err);
    });
};
exports.getS3UploadUrl = getS3UploadUrl;
