FROM node:lts-bookworm-slim
WORKDIR /base
ARG api_key
COPY ./routes/ /base/routes/
COPY ./index.js /base/
COPY ./.gitignore /base/
COPY ./.prettierrc /base/
COPY ./package.json /base/
ENV STACK_EXCHANGE_API_KEY $api_key
RUN corepack enable
RUN yarn
CMD ["yarn", "prod"]
