import { PrismaClient } from '@prisma/client';
import { AppError } from '../../errors/appError.js';
import { isUUID } from '../../utils/isUUID.utils.js';

const prisma = new PrismaClient();

const deleteBookService = async (bookId) => {
    if (!isUUID(bookId)) {
        throw new AppError(400, "Id passado deve ser um UUID.")
    }

    const bookAlreadyExists = await prisma.books.findUnique({
        where: {
            id: bookId
        }
    })

    if (!bookAlreadyExists) {
        throw new AppError(404, `Livro de id: ${bookId} não encontrado.`)
    }

    await prisma.books.delete({
        where: {
            id: bookId
        }
    });

    return {
        message: "Livro deletado com sucesso!",
        statusCode: 200,
        status: "success"
    };
}

export default deleteBookService