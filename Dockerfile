FROM node:latest
WORKDIR usr/src/app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
CMD ["node", "index.js"]