import { Router } from 'express'
import { checkJwt } from '../common/middleware/auth.middleware'
import articleController from '../controllers/article.controller'

const routes: Router = Router()

routes.get('/:id', articleController.getById)
routes.get('/', checkJwt, articleController.getAll)

export default routes