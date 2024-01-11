import { PrismaClient } from '@prisma/client';
import { AppError } from '../../errors/appError.js';

const prisma = new PrismaClient();

const createBookService = async (data) => {
    try {
        await prisma.books.create({ data });

        return {
            message: "Livro criado com sucesso!",
            statusCode: 201,
            status: "success"
        };
    } catch (error) {
        throw new AppError(500, "Erro interno")
    }
}

export default createBookService