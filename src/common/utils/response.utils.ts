import HttpStatus from 'http-status-codes';
import { Request } from 'express';
import HttpStatusCode from '../../@types/httpStatus';
import BaseError from '../../exceptions/BaseError';

const successResponse = (request: Request, data: any) => ({
  success: true,
  code: request.url,
  data
})

const errorResponse = (statusCode: HttpStatusCode, message: string, isOperational: boolean) => ({
  success: false,
  httpCode: statusCode,
  message: message,
  isOperational: isOperational
})

const errorThrownResponse = (err: Error) => ({
  success: false,
  httpCode: HttpStatus.INTERNAL_SERVER_ERROR,
  message: err.message,
  isOperational: false
})

const baseErrorThrownResponse = (err: BaseError) => ({
  success: false,
  httpCode: err.httpCode || HttpStatus.INTERNAL_SERVER_ERROR,
  message: err.message,
  isOperational: err.isOperational
})

export { 
  errorResponse,
  successResponse, 
  errorThrownResponse, 
  baseErrorThrownResponse 
}