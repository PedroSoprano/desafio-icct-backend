import { Router } from 'express'

const routes = Router()

import createBooksController from '../controllers/books/createBooks.controller.js'
import listAllBooksController from '../controllers/books/listAllBooks.controller.js'
import deleteBooksController from '../controllers/books/deleteBooks.controller.js'

routes.post('/livros', createBooksController)
routes.get('/livros', listAllBooksController)
routes.delete('/livros/:id', deleteBooksController)

export default routes
