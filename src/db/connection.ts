import {Pool} from "pg";
import dotenv from 'dotenv';
let config = {};
if (process.env.NODE_ENV === "production")
{
  dotenv.config({
    path: `${__dirname}/../../.env.production`,
  });
  config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },}}
else
{dotenv.config({
    path: `${__dirname}/../../.env.development`,
  });
config = {}}


  
export = new Pool(config)