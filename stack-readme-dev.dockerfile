FROM oven/bun:1.3.5-alpine
WORKDIR /base
ARG api_key
COPY ./source/ /base/source/
COPY ./.gitignore /base/
COPY ./.prettierrc /base/
COPY ./package.json /base/
ENV STACK_EXCHANGE_API_KEY $api_key
RUN bun install --save-text-lockfile
CMD ["bun", "run", "start"]
