import { Router } from 'express'
import loginController from '../controllers/login.controller'
import { checkData } from '../common/middleware/validation.middleware'
import {
  loginSchema
} from '../common/utils/validation.utils';

const routes = Router()

routes.post('/', checkData(loginSchema), loginController.authorize)

export default routes