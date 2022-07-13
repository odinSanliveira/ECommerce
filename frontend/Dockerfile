# using a node small basic image
FROM node:13-alpine

# exposing our app port in docker internal network
EXPOSE 3000

# creates a dir for our application
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
# COPY package.json /frontend/package.json
COPY . /frontend

RUN npm install

# Inicializa a aplicação
CMD ["npm", "start"]