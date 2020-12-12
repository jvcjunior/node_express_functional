import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../constants/auth.constant'

const encrypt = (password: string) => crypto.createHmac('sha256', password).digest('hex')

const createJwtToken = (param: any) => jwt.sign(param, process.env.JWT_KEY || JWT_SECRET)

export {
  createJwtToken,
  encrypt,
}