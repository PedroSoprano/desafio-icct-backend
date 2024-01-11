import { AppError, handleError } from '../../errors/appError.js'
import updateBookService from '../../services/books/updateBooks.service.js'

const updateBooksController = async (req, res) => {

    try {
        const { id } = req.params

        const response = await updateBookService(id, req.body)

        return res.status(200).json(response)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }

}

export default updateBooksController