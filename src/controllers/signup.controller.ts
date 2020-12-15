import { Request, Response, NextFunction } from 'express';
import signupService from '../services/signup.service'

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await signupService.signup(req))
  } catch (error) {
    next(error);
  }
}

export default { signup }