import {
  getFirstRecordBy,
  create as createRecord,
  getOne as getOneRecord,
  deleteRecord,
} from './commom.repository';
import authorModel from '../database/models/author.model'

const tableName = 'articles'
const primaryColumn = 'id'

const create = async (data: IAuthor) => createRecord(tableName, data)

const edit = async (id: number, data: IAuthor) => 
  await authorModel.query()
    .findById(id)
    //@ts-ignore
    .patch(data);

const remove = async (id: number) => deleteRecord(tableName, primaryColumn, id)

const getRecordBy = async (column: string, value: string | number) =>
  getFirstRecordBy(tableName, column, value)

const getOne = async (id: string | number) =>
  getOneRecord(tableName, primaryColumn, id)

const getAllRecords = async () => 
  await authorModel.query()

export {
  create,
  edit,
  remove,
  getOne,
  getAllRecords,
  getRecordBy,
}

