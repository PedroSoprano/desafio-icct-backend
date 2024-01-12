import { body } from 'express-validator'

export const createBookPayloadValidator = [
    body('nome').trim().notEmpty().withMessage('O nome do livro é obrigatório e não pode estar vazio').isString().withMessage('O nome do livro deve ser uma string'),
    body('nomeDoAutor').trim().notEmpty().withMessage('O nome do autor é obrigatório e não pode estar vazio').isString().withMessage('O nome do autor deve ser uma string'),
    body('lancamento').trim().notEmpty().withMessage('A data de lançamento é obrigatória e não pode estar vazia').isISO8601().withMessage('A data de lançamento deve estar no formato ISO8601'),
    body('tipo').trim().notEmpty().withMessage('O tipo do livro é obrigatório e não pode estar vazio').isString().withMessage('O tipo do livro deve ser uma string'),
    body('genero').trim().notEmpty().withMessage('O gênero do livro é obrigatório e não pode estar vazio').isString().withMessage('O gênero do livro deve ser uma string'),
    body('editora').trim().notEmpty().withMessage('O nome da editora é obrigatório e não pode estar vazio').isString().withMessage('O nome da editora deve ser uma string'),
    body('anoEdicao').trim().notEmpty().withMessage('O ano de edição é obrigatório e não pode estar vazio').isString().withMessage('O ano de edição deve ser um número'),
    body('numEdicao').trim().notEmpty().withMessage('O número da edição é obrigatório e não pode estar vazio').isString().withMessage('O número da edição deve ser um número'),

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