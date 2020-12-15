import { Router } from "express"
//  Routes
import login from './routes/login.route'
import signUp from './routes/signup.route'
import article from './routes/article.route'
import articleAdmin from './routes/articleAdmin.route'
import authorAdmin from './routes/authorAdmin.route'

const routes: Router = Router()

routes.use('/api/login', login)
routes.use('/api/signup', signUp)
routes.use('/api/articles', article)
routes.use('/api/admin/articles', articleAdmin)
routes.use('/api/admin/authors', authorAdmin)

export default routes;
