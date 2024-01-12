![Logo do ICCT](https://media.licdn.com/dms/image/C4D0BAQGQoDkJFUfLZA/company-logo_200_200/0/1644001737031/icct_instituto_cal_camp_de_tecnologia_logo?e=2147483647&v=beta&t=BccxJ0zHTvigHOk9docGZPqy0djsActYLGrVUcww1p4)

# Desafio ICCT Backend

## Descrição do Projeto

O projeto **desafio-icct-backend** é uma aplicação backend desenvolvida por Pedro Soprano para atender aos requisitos do Desafio ICCT. A aplicação utiliza tecnologias modernas para criar uma API robusta, incluindo o framework Express.js, o ORM Prisma, validação de dados com o express-validator, autenticação JWT, e documentação Swagger.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no lado do servidor.
- **Express.js:** Framework web para Node.js, utilizado para criar a API.
- **Prisma:** ORM (Object-Relational Mapping) para interagir com o banco de dados de forma mais intuitiva.
- **JWT (JSON Web Tokens):** Mecanismo de autenticação para proteger rotas da API.
- **Swagger-jsdoc e Swagger-ui-express:** Ferramentas para gerar e visualizar a documentação da API.

## Documentação do projeto no Swagger
- Abra o navegador e vá para http://seu_ip ou localhost:a_porta_onde o_backend_está_rodando/api-docs para acessar a documentação Swagger.

## Instruções para Configurar e Rodar o Projeto

Obs: Na rota de login qualquer email e senha irá gerar um token

### Pré-requisitos

- Certifique-se de ter o Node.js instalado. Recomenda-se a versão 17 ou superior.
- Tenha o Docker e o Docker Compose instalados na máquina.

### Passos para executar com o Docker compose

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/desafio-icct-backend.git
   cd desafio-icct-backend

2. **Configure as variáveis de ambiente:**

    ```bash
    PORT=3000
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret

3. **Execute a API com o seguinte comando:**

   ```bash
   docker compose up -d --build


### Passos para executar a API

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/desafio-icct-backend.git
   cd desafio-icct-backend

2. **Instale as dependências:**

   ```bash
   npm install

3. **Configure as variáveis de ambiente:**

    ```bash
    PORT=3000
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret

4. **Execute os comandos:**

    ```bash
    npx prisma generate
    npx prisma migrate dev


5. **Execute a API com o seguinte comando:**

    ```bash
    npm start