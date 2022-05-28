import { Express } from 'express'
const Post = require('./Post')
const Users = require('./Users')
const Sessions = require('./Sessions')

export default function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Express + TypeScript Server from routes')
  })
  // app.use("/posts", Post);
  app.use('/api/users', Users)
  app.use('/api/sessions', Sessions)
}
