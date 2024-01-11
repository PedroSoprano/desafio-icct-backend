import { Router } from 'express'
import { createBookPayloadValidator } from '../validators/books/createBookPayload.validator.js'

const booksRouters = Router()

import createBooksController from '../controllers/books/createBooks.controller.js'
import listAllBooksController from '../controllers/books/listAllBooks.controller.js'
import deleteBooksController from '../controllers/books/deleteBooks.controller.js'
import updateBooksController from '../controllers/books/updateBooks.controller.js'

booksRouters.post('/livros', createBookPayloadValidator, createBooksController)
booksRouters.get('/livros', listAllBooksController)
booksRouters.delete('/livros/:id', deleteBooksController)
booksRouters.patch('/livros/:id', updateBooksController)

export default booksRouters
