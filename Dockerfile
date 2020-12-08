FROM node:latest

# Create inside docker an app directory
WORKDIR /home/app

COPY app/ /home/app/

# installation de nodemon
RUN npm install -g nodemon

# lancement de l'app node.js
CMD ["nodemon","index.js"]