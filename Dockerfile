FROM python:3.9 AS build

WORKDIR /app

COPY . /app

RUN make venv
RUN make build-docs

FROM nginx:1.25.2-alpine

COPY --from=build /app/site /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]