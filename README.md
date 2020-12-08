# Node.js Dicord Chuck Norris Bot

## Comment utiliser se repo ?
Etape 1 : clonez ce repo sur votre machine   
Etape 2 : Modifiez dans le fichier : /app/config.json le token du bot par le votre !  
Etape 3 : Lancez les commandes docker  

## Discord
Au préalable il faudra vous rendre sur :  
https://discord.com/developers/applications  
Créez une nouvelle app,  
Créez un bot dans le menu bot,  
Ajoutez votre bot à un serveur Discord.js via le menu oAuth2 en selectionnant bot dans les scopes et donnez lui des droits (type admin par exemple) pour le server discord.
## Docker commandes utiles
### Lancement
docker build --tag node-docker .  
docker run -it node-docker
### Suppression
docker rmi $(docker images -q)  


pas de docker-compose.yml car ce dernier me renvoyait des erreurs impossible à résoudre!  
[![docker-compose-bug.png](https://i.postimg.cc/8ckwvXhV/docker-compose-bug.png)](https://postimg.cc/MM4y2DPs)