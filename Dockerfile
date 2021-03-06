FROM node:alpine
# WORKDIR /fb-back
COPY package.json ./
COPY package-lock.json ./
RUN npm install
EXPOSE 5000
COPY . ./
CMD ["npm", "run", "server"]