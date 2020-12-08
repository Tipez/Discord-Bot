# Docker commandes utiles
## Lancement
docker build --tag node-docker .  
docker run -it node-docker
## Suppression
docker rmi $(docker images -q)  


pas de docker-compose.yml car ce dernier me renvoyait des erreurs !  
[![docker-compose-bug.png](https://i.postimg.cc/8ckwvXhV/docker-compose-bug.png)](https://postimg.cc/MM4y2DPs)