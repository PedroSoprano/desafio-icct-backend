import { PrismaClient } from '@prisma/client';
import { AppError } from '../../errors/appError.js';

const prisma = new PrismaClient();

const createBookService = async (data) => {
    try {

        const newBook = await prisma.books.create({ data });

        return newBook;

    } catch (error) {
        throw new AppError(error.errorCode ?? 500, 'Erro ao criar livro')
    }
}

export default createBookService