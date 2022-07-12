FROM node:16.15.1-alpine
WORKDIR /app
COPY package.json .
COPY . .
CMD ["npm", "run", "dev"]