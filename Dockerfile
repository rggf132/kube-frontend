FROM node:10

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8080

CMD PORT=8080 serve -s build