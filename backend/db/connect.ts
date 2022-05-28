import mongoose from 'mongoose'
import dotenv from 'dotenv'
import log from '../logger'
dotenv.config()
const connect = () => {
  const dbUri = process.env.DB_URI as string

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info('Database connected')
    })
    .catch((error) => {
      log.error('db error', error)
      process.exit(1)
    })
}

export default connect
