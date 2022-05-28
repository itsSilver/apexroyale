import {
  createUserSchema,
  createUserSessionSchema
} from './../schema/User.schema'
import express from 'express'
import { createUserHandler } from '../controllers/User.controller'
import validateRequest from '../middleware/validateRequest'
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler
} from '../controllers/Session.controller'
import requiresUser from '../middleware/requiresUser'
const router = express.Router()

// Login
router.post(
  '/',
  validateRequest(createUserSessionSchema),
  createUserSessionHandler
)
// Get the user's sessions
router.get('/', requiresUser, getUserSessionsHandler)

// Logout
router.delete('/', requiresUser, invalidateUserSessionHandler)

module.exports = router
