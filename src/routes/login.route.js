import { Router } from 'express'
import { checkLoginPayloadValidator } from '../validators/login/loginPayload.validator.js'

const loginRouter = Router()

import loginController from '../controllers/login/auth.controller.js'

loginRouter.post('/api/login', checkLoginPayloadValidator, loginController)

export default loginRouter