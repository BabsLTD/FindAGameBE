"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3UploadUrl = void 0;
const aws_sdk_1 = require("aws-sdk");
const dotenv_1 = __importDefault(require("dotenv"));
const crypto_1 = __importDefault(require("crypto"));
const util_1 = require("util");
const randomBytes = (0, util_1.promisify)(crypto_1.default.randomBytes);
dotenv_1.default.config();
const region = "eu-west-2";
const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;
const bucketName = "game-finder-s3-bucket";
const s3 = new aws_sdk_1.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "v4",
});
const s3UploadUrl = () => {
    return randomBytes(16).then((rawBytes) => {
        const imageName = rawBytes.toString("hex");
        const params = {
            Bucket: bucketName,
            Key: imageName,
            Expires: 60,
        };
        return s3.getSignedUrlPromise("putObject", params);
    });
};
exports.s3UploadUrl = s3UploadUrl;
