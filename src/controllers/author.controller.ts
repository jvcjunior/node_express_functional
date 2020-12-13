import { Request, Response, NextFunction } from 'express';
import authorService from '../services/author.service'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await authorService.getAll(req))
  } catch (error) {
    next(error);
  }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // res.json(await authorService.getById(req))
  } catch (error) {
    next(error);
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await authorService.create(req))
  } catch (error) {
    next(error);
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // res.json(await authorService.update(req))
  } catch (error) {
    next(error);
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // res.json(await authorService.remove(req))
  } catch (error) {
    next(error);
  }
}

export default { 
  getById, 
  getAll,
  create,
  update,
  remove,
}