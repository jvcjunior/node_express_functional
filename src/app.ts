import express from 'express'
//@ts-ignore
import cors from 'cors';
//@ts-ignore
import morgan from 'morgan';
import routes from './routes';
import errorMiddleware from './common/middleware/error.middleware'

// UncaughtException and UnhandledRejection handlers
import './common/utils/errorHandlerGlobal.utils'
// Database connection
import './database/connection';

// Create a new express application instance
const app = express();

  // Call midlewares
app.use(cors())
app.use(express.json())
app.use(morgan('[:date[clf]] :method :url status::status length::res[content-length] - :response-time ms'));
//Set all routes from routes folder
app.use(routes)
app.use(errorMiddleware)

export default app;