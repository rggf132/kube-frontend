FROM node:10

RUN npm install -g serve

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD PORT=8080 serve -s build