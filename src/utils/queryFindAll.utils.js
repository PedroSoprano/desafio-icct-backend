import { AppError } from "../errors/appError.js";

export const queryHandlingListAllBooks = (query) => {
    const fieldsBooks = ['id', 'nome', 'nomeDoAutor', 'lancamento', 'tipo', 'genero', 'editora', 'anoEdicao', 'numEdicao'];

    const { take, skip, ...filteredQuery } = query;

    if ((take && !skip) || (skip && !take)) {
        throw new AppError(400, "A query take e skip são necessárias para paginação.");
    }

    const validFields = Object.keys(filteredQuery).filter(field => fieldsBooks.includes(field));

    if (take && skip && validFields.length === 0) {
        return {
            take: parseInt(take, 10),
            skip: parseInt(skip, 10),
        };
    }

    if (take && skip && validFields.length > 0) {
        const where = validFields.reduce((acc, field) => {
            acc[field] = filteredQuery[field];
            return acc;
        }, {});

        return {
            take: parseInt(take, 10),
            skip: parseInt(skip, 10),
            where,
        };
    }

    if (validFields.length > 0) {
        const where = validFields.reduce((acc, field) => {
            acc[field] = filteredQuery[field];
            return acc;
        }, {});

        return {
            where,
        };
    }

    return
};
