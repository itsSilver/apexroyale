import type { Express, Request, Response } from 'express'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from './routes'
import log from './logger'
import connect from './db/connect'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
)

// app.use('/posts', Post)
app.listen(port, () => {
  log.info(`⚡️[server]: Server is running at http://localhost:${port}`)

  app.use(express.json())

  // connect to db

  connect()

  // routes
  routes(app)
})
