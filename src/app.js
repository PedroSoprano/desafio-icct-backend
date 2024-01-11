import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/books.routes.js';
import errorHandlerMiddleware from './middlewares/Error/errorHandling.middleware.js';
import loginRouter from './routes/login.route.js';
import { authMiddleware } from './middlewares/auth/auth.middleware.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import cors from 'cors';

dotenv.config();

const app = express()

const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));

app.use(express.json());

app.use(errorHandlerMiddleware);

app.use(authMiddleware)

app.use(bookRoutes)
app.use(loginRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});