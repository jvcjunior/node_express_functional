import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi'; 
import BaseError from '../../exceptions/BaseError';

// schema options
const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true // remove unknown props
};

export const checkData = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log('Checking permissions middleware...')
     // validate request body against schema
     const { error, value } = schema.validate(req.body, options);
    
    if (error) { 
      throw new BaseError("", HttpStatus.UNPROCESSABLE_ENTITY, `Validation error: ${error.details.map(x => x.message).join(', ')}`, true);
    } else { 
      // on success replace req.body with validated value and trigger next middleware function
      req.body = value;
      next(); 
    } 
  }
}
