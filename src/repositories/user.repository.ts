import baseRepository from './commom.repository';

const tableName = 'users'

const getRecordBy = async (column: string, value: string | number) =>
  baseRepository.getFirstRecordBy(tableName, column, value)

const create = async (data: User) => baseRepository.create(tableName, data)

export {
  getRecordBy,
  create,
}

