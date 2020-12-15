
import userModel from '../database/models/user.model'

const getUserWithRole = async ({ id }: { id: number}) => 
  userModel
    .query()
    .withGraphJoined('role')
    .where('users.id', '=', id)
    .first()

const getUserRole = async ({ id }: { id: number}) => 
  userModel
  .query()
  .withGraphJoined('role')
  .where('users.id', '=', id)
  .first()
  // .then(((user) => user.role)
  
  // const user = await userModel
    // console.log(user.role)

    // return user;

export {
  getUserRole,
  getUserWithRole,
}

