
import userModel from '../database/models/user.model'

const getUserWithRole = async (id: number) => 
  userModel
    .query()
    .withGraphJoined('role')
    .where('users.id', '=', id)
    .first()

export {
  getUserWithRole,
}

