import { Request, Response, NextFunction } from 'express';

export const checkPermissions = (req: Request, res: Response, next: NextFunction) => {
  console.log('Checking permissions middleware...')
  //Call the next middleware or controller
  next();
}
