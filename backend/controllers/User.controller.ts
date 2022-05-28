import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { createUser } from '../services/User.service'
import { omit } from 'lodash'

const createUserHandler = async (req: Request, res: Response) => {
  const { email, password, username } = req.body

  try {
    const user = await createUser({ email, password, username })

    return res.status(201).json(omit(user, ['password']))
  } catch (error) {}
}
