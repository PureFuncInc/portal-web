FROM joseluisq/static-web-server:2-alpine

ENV SERVER_PORT 80
ENV SERVER_ROOT /public

COPY /public /public
