import express from 'express';
import morgan from 'morgan';
import userRoute from './routes/userRoutes.js';
import generalError from './errors/errorHandler.js';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use('/api/v1/users', userRoute);

app.use(generalError);

export default app;
