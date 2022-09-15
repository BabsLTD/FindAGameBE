import { S3 } from "aws-sdk";
import dotenv from "dotenv";
import crypto from "crypto";
import { promisify } from "util";
const randomBytes = promisify(crypto.randomBytes);

dotenv.config();

const region = "eu-west-2";
const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;
const bucketName = "game-finder-s3-bucket";
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export const s3UploadUrl = () => {
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
