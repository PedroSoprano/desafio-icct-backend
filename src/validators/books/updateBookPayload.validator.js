import { body } from 'express-validator'

export const updateBookPayloadValidator = [
    body('nome').isString().withMessage('O nome do livro deve ser uma string'),
    body('nomeDoAutor').isString().withMessage('O nome do autor deve ser uma string'),
    body('lancamento').isISO8601().withMessage('A data de lançamento deve estar no formato ISO8601'),
    body('tipo').isString().withMessage('O tipo do livro deve ser uma string'),
    body('genero').isString().withMessage('O gênero do livro deve ser uma string'),
    body('editora').isString().withMessage('O nome da editora deve ser uma string'),
    body('anoEdicao').isString().withMessage('O ano de edição deve ser um número'),
    body('numEdicao').isString().withMessage('O número da edição deve ser um número'),

    (req, res, next) => {
        const bookFields = ['nome', 'nomeDoAutor', 'lancamento', 'tipo', 'genero', 'editora', 'anoEdicao', 'numEdicao'];

        const noBookFields = Object.keys(req.body).filter(campo => !bookFields.includes(campo));

        if (noBookFields.length > 0) {
            return res.status(400).json({
                status: 'error',
                statusCode: 400,
                message: `Campos não esperados: ${noBookFields.join(', ')}`
            });
        }

        next();
    }
]