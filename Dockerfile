FROM node:16

WORKDIR /app

COPY . .

# RUN npm list 

RUN npm install

EXPOSE 3000

CMD ["node", "server"]