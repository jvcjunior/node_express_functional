//@ts-ignore
import asyncPipe from 'pipeawait';
import { Request } from 'express';
import { curry, getOr,  } from 'lodash/fp'
import { successResponse } from '../common/utils/response.utils';
import { encrypt } from '../common/utils/auth.utils'
import { create } from '../repositories/user.repository'

const signup = async (request: Request) =>
  asyncPipe(
    encryptPassword,
    create,
    curry(successResponse)(request)
  )(request.body)

const encryptPassword = (user: SignupDTO) => ({
  ...user,
  password: encrypt(user.password)
})

export default {
  signup,
}