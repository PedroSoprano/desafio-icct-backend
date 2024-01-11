import { AppError, handleError } from '../../errors/appError.js'
import { validationResult } from 'express-validator';
import { loginService } from '../../services/login/login.service.js';


const loginController = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const token = loginService(req.body)

        return res.status(200).json(token)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res)
        }
    }

}

export default loginController