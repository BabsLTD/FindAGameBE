import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { s3UploadUrl } from "../models/s3";

export const getS3UploadUrl = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  s3UploadUrl()
    .then((url) => {
      res.send({ url });
    })
    .catch((err) => {
      next(err);
    });
};
