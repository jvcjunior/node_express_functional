import { Router } from 'express'
import { checkPermissions } from './../common/middleware/permissions.middleware';
import { checkJwt } from '../common/middleware/auth.middleware'
import articleController from '../controllers/article.controller'

const routes: Router = Router()

routes.get('/', checkJwt, checkPermissions('get_articles'), articleController.getAll)
routes.get('/:id', checkJwt, checkPermissions('get_article'), articleController.getById)
routes.post('/', checkJwt, checkPermissions('post_article'), articleController.create)
routes.put('/:id', checkJwt, checkPermissions('put_article'), articleController.update)
routes.delete('/:id', checkJwt, checkPermissions('delete_article'), articleController.remove)

export default routes