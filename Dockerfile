FROM node:alpine
COPY package.json ./
COPY package-lock.json ./
RUN npm install
EXPOSE 5000
COPY api .
CMD ["npm", "run", "server"]