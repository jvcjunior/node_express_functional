import database from '../database/connection'

const getFirstRecordBy = async (tableName: string, column: string, value: string | number) =>
  await database
    .select()
    .from(tableName)
    .where(column, '=', value)
    .first()

const create = async (tableName: string, data: User) =>
  await database(tableName)
    .returning('*')
    .insert(data)

export default {
  getFirstRecordBy,
  create,
}