import {
  getFirstRecordBy,
  create as createRecord
} from './commom.repository';

const tableName = 'users'

const getRecordBy = async (column: string, value: string | number) =>
  getFirstRecordBy(tableName, column, value)

const create = async (data: IUser) => createRecord(tableName, data)

export {
  getRecordBy,
  create,
}

