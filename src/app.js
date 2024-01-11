import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/books.routes.js';

import { AppError } from './errors/appError.js';

dotenv.config();

const app = express()

const port = process.env.PORT || 3000;

app.use(express.json())

app.use(bookRoutes)

app.use((err, request, response, _) => {

    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});