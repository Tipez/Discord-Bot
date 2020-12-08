FROM node:latest

# Create inside docker an app directory
WORKDIR /home/app

COPY app/ /home/app/

# lancement de l'app node.js
CMD ["node","index.js"]