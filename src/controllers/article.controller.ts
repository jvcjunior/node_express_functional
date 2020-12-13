import { Request, Response, NextFunction } from 'express';
import articleService from '../services/article.service'

const getArticles = (req: Request, res: Response) => {
  res.send({})
}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await articleService.getAll(req))
  } catch (error) {
    next(error);
  }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await articleService.getById(req))
  } catch (error) {
    next(error);
  }
}

export default { 
  getById, 
  getArticles,
  getAll,
}