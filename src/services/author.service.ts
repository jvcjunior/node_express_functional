//@ts-ignore
import asyncPipe from 'pipeawait';
import { Request } from 'express';
import { curry, omit, map } from 'lodash/fp'
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
  )(request.params.id)

const create = async (request: Request) =>
  asyncPipe(
    createRecord,
    curry(successResponse)(request)
  )(request.body)

  const update = async (request: Request) =>
  asyncPipe(
    editRecord,
    curry(successResponse)(request)
  )(request.body)

const deleteOne = async (request: Request) =>
  asyncPipe(
    removeRecord,
    curry(successResponse)(request)
  )(request.params.id)

export default {
  create,
  update,
  deleteOne,
  getAll,
  getById,
  // getOne,
  // update,
}