FROM node:10

RUN mkdir -p /srv/node_modules && chown -R node:node /srv

WORKDIR /srv

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

USER node

CMD [ "npm", "start" ]