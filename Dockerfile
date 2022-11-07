FROM nginx

LABEL Author="WolfGear Tech"

COPY ./default.conf /etc/nginx/conf.d/
COPY ./dist/spa /usr/share/nginx/html

EXPOSE 80