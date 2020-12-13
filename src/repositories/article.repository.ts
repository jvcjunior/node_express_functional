import {
  getFirstRecordBy,
  create as createRecord,
  getOne as getOneRecord,
} from './commom.repository';
import database from '../database/connection'
import articleModel from '../database/models/article.model'

const tableName = 'articles'
const primaryColumn = 'id'

const create = async (data: IUser) => createRecord(tableName, data)

const getRecordBy = async (column: string, value: string | number) =>
  getFirstRecordBy(tableName, column, value)

const getOne = async (id: string | number) =>
  getOneRecord(tableName, primaryColumn, id)

const getOneWithAuthor = async (id: string | number) => 
  await articleModel
    .query()
    .withGraphJoined({ author: true })
    .where('articles.id', '=', id)
    .first()

const getAllRecords = async () => 
  await articleModel.query().withGraphJoined({ author: true })

export {
  create,
  getOne,
  getOneWithAuthor,
  getAllRecords,
  getRecordBy,
}

