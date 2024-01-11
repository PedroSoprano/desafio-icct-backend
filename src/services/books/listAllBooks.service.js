import { PrismaClient } from '@prisma/client';
import { queryHandlingListAllBooks } from '../../utils/queryFindAll.utils.js';
import { AppError } from '../../errors/appError.js';

const prisma = new PrismaClient();

const listAllBooksService = async (query) => {
    const allBooks = await prisma.books.findMany(queryHandlingListAllBooks(query));

    return allBooks;
}

export default listAllBooksService