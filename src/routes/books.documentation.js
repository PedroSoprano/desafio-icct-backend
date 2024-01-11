
/**
 * @swagger
 * /api/livros:
 *   post:
 *     summary: Adiciona um novo livro
 *     description: Adiciona um novo livro à biblioteca.
 *     tags:
 *       - Livros
 * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeDoAutor:
 *                 type: string
 *               lancamento:
 *                 type: string
 *               tipo:
 *                 type: string
 *               genero:
 *                 type: string
 *               editora:
 *                 type: string
 *               anoEdicao:
 *                 type: string
 *               numEdicao:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Livro criado com sucesso!
 *                 statusCode:
 *                   type: number
 *                   example: 201
 *                 status:
 *                   type: string
 *                   example: success
 *       401:
 *         description: Token não fornecido ou inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: Token não fornecido
 *       403:
 *         description: Token inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 403
 *                 message:
 *                   type: string
 *                   example: Token inválido
 */


/**
 * @swagger
 * /api/livros:
 *   get:
 *     summary: Lista todos os livros
 *     description: Retorna uma lista de todos os livros disponíveis na biblioteca.
 *     tags:
 *       - Livros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *           default: 
 *         description: Número máximo de livros a serem retornados
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *           default:
 *         description: Número de livros a serem pulados no início
 *       - in: query
 *         name: filtro
 *         schema:
 *           type: string
 *         description: Propriedade para busca específica exemplo -> nome=nome do livro
 *     responses:
 *       200:
 *         description: Lista de livros recuperada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nome:
 *                     type: string
 *                   nomeDoAutor:
 *                     type: string
 *                   lancamento:
 *                     type: string
 *                   tipo:
 *                     type: string
 *                   genero:
 *                     type: string
 *                   editora:
 *                     type: string
 *                   anoEdicao:
 *                     type: string
 *                   numEdicao:
 *                     type: string
 *       401:
 *         description: Token não fornecido ou inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: Token não fornecido
 *       403:
 *         description: Token inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 403
 *                 message:
 *                   type: string
 *                   example: Token inválido
 */

/**
 * @swagger
 * /api/livros/{id}:
 *   patch:
 *     summary: Atualiza informações de um livro
 *     description: Atualiza informações específicas de um livro com base no ID fornecido.
 *     tags:
 *       - Livros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser atualizado
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               nomeDoAutor:
 *                 type: string
 *               lancamento:
 *                 type: string
 *               tipo:
 *                 type: string
 *               genero:
 *                 type: string
 *               editora:
 *                 type: string
 *               anoEdicao:
 *                 type: string
 *               numEdicao:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Livro atualizado com sucesso!
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 status:
 *                   type: string
 *                   example: success
 *       400:
 *         description: Id passado deve ser um UUID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Id passado deve ser um UUID
 *       404:
 *         description: Livro não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *                   example: "Livro de id: 93951af3-09b0-4c81-9646-432f72fc4c9f não encontrado"
 *       401:
 *         description: Token não fornecido ou inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: Token não fornecido
 *       403:
 *         description: Token inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 403
 *                 message:
 *                   type: string
 *                   example: Token inválido
 */


/**
 * @swagger
 * /api/livros/{id}:
 *   delete:
 *     summary: Exclui um livro
 *     description: Exclui um livro específico da biblioteca com base no ID fornecido.
 *     tags:
 *       - Livros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro a ser excluído
 *         schema:
 *           type: string
 *           format: uuid
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Livro deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Livro deletado com sucesso!
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 status:
 *                   type: string
 *                   example: success
 *       400:
 *         description: Id passado deve ser um UUID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Id passado deve ser um UUID
 *       404:
 *         description: Livro não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 404
 *                 message:
 *                   type: string
 *       401:
 *         description: Token não fornecido ou inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: Token não fornecido
 *       403:
 *         description: Token inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 403
 *                 message:
 *                   type: string
 *                   example: Token inválido
 */

