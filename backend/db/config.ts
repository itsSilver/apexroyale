import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dbUri: process.env.DB_URI,
}