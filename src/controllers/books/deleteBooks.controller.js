import { AppError, handleError } from '../../errors/appError.js'
import deleteBookService from '../../services/books/deleteBooks.service.js'

const deleteBooksController = async (req, res) => {

    try {
        const { id } = req.params

        const response = await deleteBookService(id)

        return res.status(200).json(response)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }

}

export default deleteBooksController