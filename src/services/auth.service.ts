//@ts-ignore
import { asyncPipe } from 'pipeawait';
import HttpStatus from 'http-status-codes'
import { Request } from 'express';
import { getOr, get, omit } from 'lodash/fp'
import BaseError from '../common/utils/baseError.utils';
import { successResponse } from '../common/utils/response.utils';
import { createJwtToken, encrypt } from '../common/utils/auth.utils'
import { getRecordBy } from '../repositories/user.repository'

const authenticate = async (request: Request) => {
  const { email, password } = request.body
  if (!email || !password) {
    throw new BaseError("", HttpStatus.BAD_REQUEST, "Please inform email and password", true);
  }

  const user = await getRecordBy('email', email)
  if (!user) {
    throw new BaseError("Invalid email or password", HttpStatus.UNAUTHORIZED, "Invalid email or password", true);
  }

  const encryptPassword = encrypt(password)
  if (getOr('', 'password', user) !== encryptPassword) {
    throw new BaseError("Invalid email or password", HttpStatus.UNAUTHORIZED, "Invalid email or password", true);
  }

  const userData = omit(['password'], user)
  return successResponse(request, {
    token: jwtSignIn(user),
    user: userData
  })
}

const jwtSignIn = (user: IUser) => {
  const jwtToken = createJwtToken({
    id: get('id', user),
    email: get('email', user),
    name: get('name', user),
  })
  return jwtToken;
}

const signup = (request: Request) => {}

export default {
  authenticate,
  signup,
}