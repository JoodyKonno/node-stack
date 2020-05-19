FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install && npm install -g nodemon

COPY . .
COPY --chown=node:node . .

USER node

EXPOSE 3004

CMD [ "npm", "run", "start-dev" ]
