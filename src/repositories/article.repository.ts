import {
  getFirstRecordBy,
  create as createRecord,
  getOne as getOneRecord,
  deleteRecord,
} from './commom.repository';
import { isEmpty } from 'lodash/fp'
import articleModel from '../database/models/article.model'

const tableName = 'articles'
const primaryColumn = 'id'

const create = async (data: IAuthor) => createRecord(tableName, data)

const edit = async ({id, data}: { id: number, data: IAuthor }) => 
  await articleModel.query()
    .findById(id)
    //@ts-ignore
    .patch(data);

const remove = async (id: number) => deleteRecord(tableName, primaryColumn, id)

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

const getAllRecords = async (category: string) => {
  const sql = articleModel.query();
  if (!isEmpty(category)){
    sql.where(builder =>
      builder
        .where('category', 'like', `%${category}%`)
    )
  }
  return await sql.withGraphJoined({ author: true })
}

export {
  create,
  edit,
  remove,
  getOne,
  getOneWithAuthor,
  getAllRecords,
  getRecordBy,
}

