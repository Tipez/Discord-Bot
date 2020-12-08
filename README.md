# Node.js | Dicord Chuck Norris Bot

# Table des matières
1. [Utilisation du Repo](#Repo)
2. [Discord](#discord)
3. [Commandes](#commandes)
4. [Docker](#docker)

## Comment utiliser se repo ? (#Repo)
-Etape 1 : clonez ce repo sur votre machine   
-Etape 2 : Modifiez dans le fichier : /app/config.json le token du bot par le votre !  
-Etape 3 : Lancez les commandes docker  


## Discord (#discord)
Au préalable il faudra vous rendre sur :  
https://discord.com/developers/applications  
-Créez une nouvelle app,  
-Créez un bot dans le menu bot,  
-Ajoutez votre bot à un serveur Discord.js via le menu oAuth2 en selectionnant bot dans les scopes et donnez lui des droits (type admin par exemple) pour le server discord.

## Chuck Norris Bot Commandes (#commandes)
Liste des commandes disponibles :
- %joke
- %jokeCount
- %joke[id] où id est un id valide
- %joke[catégorie] où catégorie est une catégorie valide
- %jokeCategories
- %help
- %ping
- %prefix[new_prefix] où new_prefix est un nouveau préfix   
Api Chuck Norris : http://www.icndb.com/api/

## Docker commandes utiles (#docker)
### Lancement
docker build --tag node-docker .  
docker run -it node-docker
### Suppression
docker rmi $(docker images -q)  


pas de docker-compose.yml car ce dernier me renvoyait des erreurs impossible à résoudre!  
[![docker-compose-bug.png](https://i.postimg.cc/8ckwvXhV/docker-compose-bug.png)](https://postimg.cc/MM4y2DPs)