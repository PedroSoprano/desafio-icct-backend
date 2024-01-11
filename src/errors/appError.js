export class AppError extends Error {

    constructor(statusCode, message) {
        super()
        this.statusCode = statusCode
        this.message = message
    }

}


export const handleError = (err, res) => {

    const { statusCode, message } = err

    return res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    })
}