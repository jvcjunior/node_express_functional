import { Router } from 'express'
import { checkJwt } from '../common/middleware/auth.middleware'
import { checkPermissions } from '../common/middleware/permissions.middleware'
import authorController from '../controllers/author.controller'

const routes = Router()

routes.get('/', checkJwt, checkPermissions, authorController.getAll)
routes.get('/:id', checkJwt, checkPermissions, authorController.getById)
routes.post('/', checkJwt, checkPermissions, authorController.create)
routes.put('/:id', checkJwt, checkPermissions, authorController.update)
routes.delete('/:id', checkJwt, checkPermissions, authorController.remove)

export default routes