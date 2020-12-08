# Docker commandes utiles
## Lancement
docker build --tag node-docker .  
docker run -it node-docker
## Suppression
docker rmi $(docker images -q)  


pas de docker-compose.yml car ce dernier me renvoyait des erreurs !
Il faudra faire sans volume