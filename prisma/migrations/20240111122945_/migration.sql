-- CreateTable
CREATE TABLE "Books" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeDoAutor" TEXT NOT NULL,
    "lancamento" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "anoEdicao" TEXT NOT NULL,
    "numEdicao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
