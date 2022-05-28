import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { createUser } from '../services/User.service'
import { omit } from 'lodash'

export const createUserHandler = async (req: Request, res: Response) => {
  // const { email, password, username } = req.body

  try {
    const user = await createUser(req.body)

    return res.status(201).json(omit(user.toJSON(), 'password'))
  } catch (error: any) {
    return res.status(409).json({ error: error.message })
  }
}
