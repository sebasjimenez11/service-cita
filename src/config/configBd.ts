import mysql from 'mysql2';
import dotenv from "dotenv";
/* import * as fs from 'fs';
import * as path from 'path';

const certPath = path.resolve(__dirname, './config/certs/DigiCertGlobalRootG2.crt.pem'); */

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
  queueLimit: 0,
  /* ssl: {
    ca: fs.readFileSync(certPath),  
    rejectUnauthorized: false
  } */
});

export default db.promise();
