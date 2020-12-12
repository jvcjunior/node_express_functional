import { Router } from 'express'
import { checkJwt } from '../common/middleware/auth.middleware'
import articleController from '../controllers/article.controller'

const routes = Router()

routes.get('/', checkJwt, articleController.getArticles)

export default routes