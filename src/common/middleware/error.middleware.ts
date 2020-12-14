import { Request, Response, NextFunction } from 'express';
import BaseError from '../../exceptions/BaseError';
import { errorHandler } from './../utils/errorHandler.utils';
import { errorThrownResponse, baseErrorThrownResponse } from './../utils/response.utils';

export const handler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!errorHandler.isTrustedError(err)) {
    next(err);
  }
  await errorHandler.handleError(err);

  if(err instanceof BaseError){
    res.status(err.httpCode).json(baseErrorThrownResponse(err))
    return;
  } else {
    res.status(500).json(errorThrownResponse(err))
    return;
  }
}

export default handler;
