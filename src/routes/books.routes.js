import { Router } from 'express'
import { createBookPayloadValidator } from '../validators/books/createBookPayload.validator.js'

const booksRouters = Router()

import createBooksController from '../controllers/books/createBooks.controller.js'
import listAllBooksController from '../controllers/books/listAllBooks.controller.js'
import deleteBooksController from '../controllers/books/deleteBooks.controller.js'
import updateBooksController from '../controllers/books/updateBooks.controller.js'


booksRouters.post('/api/livros', createBookPayloadValidator, createBooksController)
booksRouters.get('/api/livros', listAllBooksController)
booksRouters.delete('/api/livros/:id', deleteBooksController)
booksRouters.patch('/api/livros/:id', updateBooksController)

export default booksRouters
