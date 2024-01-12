import { body, validationResult } from 'express-validator';

export const checkLoginPayloadValidator = [
    body('email')
        .trim()
        .notEmpty().withMessage('O email é obrigatório e não pode estar vazio')
        .isEmail().withMessage('O email deve ser um endereço de email válido'),

    body('senha')
        .trim()
        .notEmpty().withMessage('A senha é obrigatória e não pode estar vazia')
        .isString().withMessage('A senha deve ser uma string'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ erros: errors.array() });
        }

        const loginFields = ['email', 'senha'];
        const noLoginFields = Object.keys(req.body).filter(campo => !loginFields.includes(campo));

        if (noLoginFields.length > 0) {
            return res.status(400).json({
                status: 'error',
                statusCode: 400,
                message: `Campos não esperados: ${noLoginFields.join(', ')}`
            });
        }

        next();
    }
];
