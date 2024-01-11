import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();

export const authMiddleware = (req, res, next) => {
    const publicRoutes = ['/api/login', '/api-docs/', '/api-docs/swagger-ui.css', '/api-docs/swagger-ui-bundle.js', '/api-docs/swagger-ui-standalone-preset.js', '/api-docs/swagger-ui-init.js', '/api-docs/favicon-32x32.png', '/api-docs/favicon-16x16.png'];

    if (publicRoutes.includes(req.path)) {
        return next();
    }

    if (!req.headers.authorization) {
        return res.status(401).json({
            status: 'error',
            statusCode: 401,
            message: 'Token não fornecido',
        });
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
            return res.status(403).json({
                status: 'error',
                statusCode: 403,
                message: 'Token inválido'
            });
        }

        req.user = decoded;
        next();
    });
}