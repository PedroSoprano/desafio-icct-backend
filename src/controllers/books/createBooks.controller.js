import { AppError, handleError } from '../../errors/appError.js'
import createBookService from '../../services/books/createBooks.service.js'

const createBooksController = async (req, res) => {

    try {
        const newBook = await createBookService(req.body)

        return res.status(201).json(newBook)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }

}

export default createBooksController