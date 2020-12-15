import database from '../database/connection'

const getFirstRecordBy = async (tableName: string, column: string, value: string) => 
  await database
    .select()
    .from(tableName)
    .where(column, '=', value)
    .first()

const getOne = async (tableName: string, columnPrimary: string, value: string) =>
  await database
    .select()
    .from(tableName)
    .where(columnPrimary, '=', value)
    .first()

const create = async (tableName: string, data: any) =>
  await database(tableName)
    .returning('*')
    .insert(data)

const deleteRecord = async (tableName: string, columnPrimary: string, id: number) =>
  await database(tableName)
    .where(columnPrimary, id)
    .delete()

export {
  getOne,
  create,
  deleteRecord,
  getFirstRecordBy,
}