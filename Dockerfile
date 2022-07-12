FROM node:14.17.3-alpine
WORKDIR /app
COPY package.json .
COPY . .
CMD ["npm", "run", "dev"]