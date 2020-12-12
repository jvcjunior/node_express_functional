import { Router } from 'express'
import { checkJwt } from '../common/middleware/auth.middleware'
import { checkPermissions } from '../common/middleware/permissions.middleware'
import articleController from '../controllers/article.controller'

const routes = Router()

routes.get('/', checkJwt, checkPermissions, articleController.getArticles)

export default routes