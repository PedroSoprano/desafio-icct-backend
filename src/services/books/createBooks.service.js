import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createBookService = async (data) => {
    try {
        const newBook = await prisma.books.create({ data });

        return newBook;
    } catch (error) {
        console.log(error)
    }
}

export default createBookService