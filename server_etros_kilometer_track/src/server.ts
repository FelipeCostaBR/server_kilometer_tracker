import 'reflect-metadata';

import './database/data-source.config';
import express, { NextFunction, Response, Request } from 'express';

import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import AppError from './errors/AppError';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).send({
      status: 'error',
      message: err.message,
      statusCode: err.statusCode,
    });
  }

  return response.status(500).send({
    status: 'error',
    message: 'Internal server error',
  });
});


app.listen(3333, () => {
  console.log('server started on port 3333');
});
