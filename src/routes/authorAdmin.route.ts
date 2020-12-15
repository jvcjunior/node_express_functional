import { Router } from 'express'
import { checkJwt } from '../common/middleware/auth.middleware'
import { checkPermissions } from '../common/middleware/permissions.middleware'
import authorController from '../controllers/author.controller'

const routes: Router = Router()

routes.get('/', checkJwt, checkPermissions('get_authors'), authorController.getAll)
routes.get('/:id', checkJwt, checkPermissions('get_author'), authorController.getById)
routes.post('/', checkJwt, checkPermissions('post_author'), authorController.create)
routes.put('/:id', checkJwt, checkPermissions('put_author'), authorController.update)
routes.delete('/:id', checkJwt, checkPermissions('delete_author'), authorController.remove)

export default routes