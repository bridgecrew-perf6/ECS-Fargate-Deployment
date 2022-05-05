FROM 456131486398.dkr.ecr.us-east-1.amazonaws.com/dinipere-app-repo:latest 

COPY /weatherfiles/.  /usr/share/nginx/html/

EXPOSE 80
