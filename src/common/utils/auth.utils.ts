import HttpStatus from 'http-status-codes';
import BaseError from '../../exceptions/BaseError';
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../constants/auth.constant'

const encrypt = (password: string) => crypto.createHmac('sha256', password).digest('hex')

const createJwtToken = (param: any) => jwt.sign(param, process.env.JWT_KEY || JWT_SECRET)

const treatAuthToken = (token: string | undefined): IUser => {
  if(!token)
  {
    throw new BaseError("No token specified", HttpStatus.UNAUTHORIZED, "No token specified", true);
  }
  if(token.indexOf('Bearer') !== -1)
  {
    token = token.slice(7);
  }
  return <IUser>jwt.verify(token, process.env.JWT_KEY || JWT_SECRET);
}

export {
  createJwtToken,
  treatAuthToken,
  encrypt,
}