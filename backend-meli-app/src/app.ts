import express, { NextFunction, Response } from 'express';
import logger from 'morgan';
import controller from './controllers/meli/controller';
// CREATE INSTANCE OF EXPRESS
const app = express();
// SERVER-MOUNTED ROUTE
const apiPath = '/api';
// IMPLEMENTE MIDDLEWARES: LOG FORMAT, CORS TO RESPONSE API
app.use(
    // MIDDLEWARE LOG
    logger('dev'),
    // MIDDLEWARE PARSE URL REQUEST
    express.urlencoded({ extended: false }),
    // MIDDLEWARE CORS
    (_, res: Response, next: NextFunction) => {
        // TO RETURN HEADER Access-Control-Allow-Origin: ALLOW ALL ORIGINS
        res.header('Access-Control-Allow-Origin', '*');
        // TO RETURN HEADER Access-Control-Allow-Headers: ALLOW ALL HEADERS
        res.header('Access-Control-Allow-Headers', '*');
        // TO RETURN HEADER Access-Control-Allow-Methods: ALLOW ONLY GET METHOD
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Allow', 'GET');
        // CONTINUE FLOW TO NEXT FUNCTION
        next();
    }
);
app.use(apiPath, controller);
export default app;
