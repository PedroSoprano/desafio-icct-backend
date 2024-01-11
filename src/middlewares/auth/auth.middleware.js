import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    if (req.path === '/login') {
        return next();
    }

    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            status: 'error',
            statusCode: 401,
            message: 'Token não fornecido',
        });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: 'error',
                statusCode: 401,
                message: 'Token inválido'
            });
        }

        req.user = decoded;
        next();
    });
}