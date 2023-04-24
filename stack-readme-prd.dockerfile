FROM node:18-alpine3.16
WORKDIR /base
ARG api_key
COPY ./routes/ /base/routes/
COPY ./index.js /base/
COPY ./.gitignore /base/
COPY ./.prettierrc /base/
COPY ./package.json /base/
ENV STACK_EXCHANGE_API_KEY $api_key
ENV NODE_ENV="production"
RUN npm install
CMD ["npm", "start"]
