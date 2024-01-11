FROM node:lts-alpine

ARG NODE_VERSION=18.17.1
ARG PORT

WORKDIR /usr/app

ENV TZ=America/Manaus
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package.json package-lock.json ./
COPY ./prisma ./prisma

COPY . ./

RUN npm install
RUN npx prisma generate 
RUN npx prisma migrate dev

EXPOSE ${PORT}

CMD ["npm", "start"]
