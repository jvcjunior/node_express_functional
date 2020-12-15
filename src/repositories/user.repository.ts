import {
  getFirstRecordBy,
  create as createRecord
} from './commom.repository';

// import userModel from '../database/models/user.model'

const tableName = 'users'

const getRecordByEmail = async (column: string, value: string) => 
  await getFirstRecordBy(tableName, column, value)
  // await userModel
  //   .query()
  //   .where('users.email', '=', value)
  //   .first()

const create = async (data: IUser) => createRecord(tableName, data)

export {
  getRecordByEmail,
  create,
}

