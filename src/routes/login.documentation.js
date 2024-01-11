/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Autenticação do usuário
 *     description: Realiza a autenticação do usuário com base no email e senha fornecidos.
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzMxMkBlbWFpbC5jb20iLCJpYXQiOjE3MDUwMDIxNjQsImV4cCI6MTcwNTAwNTc2NH0.YNWUuFkY6B82Zt_OXbmfAmQou1m5QM4vzCpcyFptDVE"
 *       400:
 *         description: Erros de validação nos dados fornecidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 erros:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: field
 *                       value:
 *                         type: string
 *                         example: ""
 *                       msg:
 *                         type: string
 *                         example: "O email é obrigatório e não pode estar vazio"
 *                       path:
 *                         type: string
 *                         example: "email"
 *                       location:
 *                         type: string
 *                         example: "body"
 *                     required:
 *                       - type
 *                       - value
 *                       - msg
 *                       - path
 *                       - location
 *                 status:
 *                   type: string
 *                   example: error
 *                 statusCode:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Erro de validação nos dados fornecidos"
 */