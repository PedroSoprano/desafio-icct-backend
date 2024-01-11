import { AppError, handleError } from '../../errors/appError.js'
import createBookService from '../../services/books/createBooks.service.js'
import { validationResult } from 'express-validator';

const createBooksController = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const newBook = await createBookService(req.body)

        return res.status(201).json(newBook)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }

}

export default createBooksController