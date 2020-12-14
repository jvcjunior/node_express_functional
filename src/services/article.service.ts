//@ts-ignore
import asyncPipe from 'pipeawait';
import { Request } from 'express';
import { curry, omit, map } from 'lodash/fp'
import { successResponse } from '../common/utils/response.utils';
import { 
  create as createRecord, 
  remove as removeRecord,
  edit as editRecord,
  getOneWithAuthor, getAllRecords 
} from '../repositories/article.repository'

const getAll = async (request: Request) =>
  asyncPipe(
    getAllRecords,
    map((article: IArticle) => 
      omit(['id', 
      'author_id', 
      'created_at', 
      'updated_at', 
      'firstParagraph',
      'body',
      'author.id', 
      'author.created_at', 
      'author.updated_at'], article)
    ),
    curry(successResponse)(request)
  )(request.query.category)

const getById = async (request: Request) =>
  asyncPipe(
    getOneWithAuthor,
    filter(request),
    serializeGetById,
    curry(successResponse)(request)
  )(request.params.id)

// TODO: see if it's necessary or if I can koin with serialize
const filter = 
(request: Request) => 
  (article: IArticle) => 
    omit(request.headers["authorization"] ? [] : ['body'], article)

const serializeGetById = (article: IArticle) =>  
  omit(['id', 'author_id', 'created_at', 'updated_at', 'author.id', 'author.created_at', 'author.updated_at'], article)

  const create = async (request: Request) =>
  asyncPipe(
    createRecord,
    curry(successResponse)(request)
  )(request.body)//TODO: improve getting these params

const update = async (request: Request) =>
  asyncPipe(
    editRecord,
    curry(successResponse)(request)
  )({id: request.params.id, data:request.body })//TODO: improve getting these params
  
const remove = async (request: Request) =>
  asyncPipe(
    removeRecord,
    curry(successResponse)(request)
  )(request.params.id)//TODO: improve getting these params

export default {
  create,
  update,
  remove,
  getAll,
  getById,
}