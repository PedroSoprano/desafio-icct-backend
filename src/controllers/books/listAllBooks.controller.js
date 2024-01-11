import { AppError, handleError } from '../../errors/appError.js'
import listAllBooksService from '../../services/books/listAllBooks.service.js'

const listAllBooksController = async (req, res) => {
    try {
        const newBook = await listAllBooksService(req.query)

        return res.status(201).json(newBook)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }

}

export default listAllBooksController