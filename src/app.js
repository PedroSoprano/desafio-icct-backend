import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/books.routes.js';
import errorHandlerMiddleware from './middlewares/Error/errorHandling.middleware.js';

dotenv.config();

const app = express()

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(errorHandlerMiddleware);

app.use(bookRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});