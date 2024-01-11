import { Router } from 'express'
import { createBookPayloadValidator } from '../validators/books/createBookPayload.validator.js'

const routes = Router()

import createBooksController from '../controllers/books/createBooks.controller.js'
import listAllBooksController from '../controllers/books/listAllBooks.controller.js'
import deleteBooksController from '../controllers/books/deleteBooks.controller.js'
import updateBooksController from '../controllers/books/updateBooks.controller.js'

routes.post('/livros', createBookPayloadValidator, createBooksController)
routes.get('/livros', listAllBooksController)
routes.delete('/livros/:id', deleteBooksController)
routes.patch('/livros/:id', updateBooksController)

export default routes
