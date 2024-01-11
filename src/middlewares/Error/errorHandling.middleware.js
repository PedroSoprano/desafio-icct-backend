import { AppError } from "../../errors/appError.js";

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.error(err);

    return res.status(err.statusCode ?? 500).json({
        statusCode: err.statusCode ?? 500,
        status: 'error',
        message: err.message ?? 'Internal server error',
    });
};

export default errorHandlerMiddleware;