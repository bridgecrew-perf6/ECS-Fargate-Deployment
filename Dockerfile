FROM nginx:latest 

COPY /weatherfiles/.  /usr/share/nginx/html/

EXPOSE 80
