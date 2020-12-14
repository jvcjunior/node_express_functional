//@ts-ignore
import asyncPipe from 'pipeawait';
import { Request } from 'express';
import { curry } from 'lodash/fp'
import { successResponse } from '../common/utils/response.utils';
import { 
  create as createRecord, 
  remove as removeRecord,
  edit as editRecord,
  getAllRecords,
  getOne,
} from '../repositories/author.repository'

const getAll = async (request: Request) =>
  asyncPipe(
    getAllRecords,
    curry(successResponse)(request)
  )(request)

const getById = async (request: Request) =>
  asyncPipe(
    getOne,
    curry(successResponse)(request)
  )(request.params.id)//TODO: improve getting these params

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