import { DocumentDefinition } from 'mongoose'
import User, { UserDocument } from '../models/User.model'

export const createUser = async (user: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(user)
  } catch (error: any) {
    throw new Error(error)
  }
}

// const getUserById = (id: string): Promise<UserDocument> => {
//   return new Promise((resolve, reject) => {
//     User.findById(id, (err, user) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(user);
//       }
//     });
//   });
// }
