import { Router } from 'express'

const routes = Router()

import createBooksController from '../controllers/books/createBooks.controller.js'

routes.post('/livros', createBooksController)

export default routes
