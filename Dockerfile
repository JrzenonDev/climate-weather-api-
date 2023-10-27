# Use the official Node.js image as the base image
FROM node:18.16.1

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do seu projeto para o contêiner
COPY . .

# Instale as dependências da aplicação
RUN npm install

# Exponha a porta que sua aplicação irá usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
