import { Request, Response, NextFunction, response } from 'express';
import authService from '../services/auth.service'

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await authService.authenticate(req))
  } catch (error) {
    next(error);
  }
}

export default { authorize }