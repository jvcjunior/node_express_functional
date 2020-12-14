import BaseError from '../../exceptions/BaseError';
import HttpStatus from 'http-status-codes';
import permissionService from '../../services/permission.service';
import { Request, Response, NextFunction } from 'express';
import { baseErrorThrownResponse, errorResponse, errorThrownResponse } from '../utils/response.utils';

export const checkPermissions = (permissionCode: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('Checking permissions...');
      await permissionService.checkPermissions(req, permissionCode)
      return next()
    } catch (error) {
      if(error instanceof BaseError){
        res.status(error.httpCode).json(baseErrorThrownResponse(error))
        return;
      } else {
        res.status(500).json(errorThrownResponse(error))
        return;
      }
    }
  }
}
