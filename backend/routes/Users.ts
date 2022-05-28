import { createUserSchema } from './../schema/User.schema'
import express from 'express'
import { createUserHandler } from '../controllers/User.controller'
import validateRequest from '../middleware/validateRequest'
const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    statusCode: 200,
    message: 'Users here!'
  })
})
router.post('/', validateRequest(createUserSchema), createUserHandler)

module.exports = router
