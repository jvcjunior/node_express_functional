import { Router } from 'express'
import signupController from '../controllers/signup.controller'
import { checkData } from '../common/middleware/validation.middleware'
import {
  signupSchema
} from '../common/utils/validation.utils';

const routes = Router()

routes.post('/', checkData(signupSchema), signupController.signup)

export default routes