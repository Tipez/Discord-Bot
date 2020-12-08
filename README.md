# Node.js | Dicord Chuck Norris Bot

# Table des matières
1. [Utilisation du Repo](#Repo)
2. [Discord](#discord)
3. [Commandes](#commandes)
4. [Docker](#docker)


<div id='Repo'/>  

## Comment utiliser se repo ?
- Etape 1 : clonez ce repo sur votre machine   
- Etape 2 : Modifiez dans le fichier : /app/config.json le token du bot par le votre !  
- Etape 3 :  
    - via docker :  
    Lancez les commandes docker  
    - via nodemon  
    Faite un `cd app/` puis `nodemon index.js`  
- Etape 4 : Allez sur votre serveur discord et tapez la commande `%joke` pour vous amuser avec Chuck Norris

<div id='discord'/>  

## Discord
Au préalable il faudra vous rendre sur :  [Developper Docker](https://discord.com/developers/applications)    
-Créez une nouvelle app,  
-Créez un bot dans le menu bot,  
-Ajoutez votre bot à un serveur Discord.js via le menu oAuth2 en selectionnant bot dans les scopes et donnez lui des droits (type admin par exemple) pour le server discord.


<div id='commandes'/>  

## Chuck Norris Bot Commandes
Liste des commandes disponibles :
- `%joke`
- `%jokeCount`
- `%joke[id]` où id est un id valide
- `%joke[catégorie]` où catégorie est une catégorie valide
- `%jokeCategories`
- `%help`
- `%ping`
- `%prefix[new_prefix]` où new_prefix est un nouveau préfix   

[Api Chuck Norris](http://www.icndb.com/api/)


<div id='docker'/>  

## Docker commandes utiles
### Lancement docker-compose
Avantages : utilisation des volumes : pendant que le docker est en exécution, on peut coder sur sa machine,    
Inconvénient : lancement du docker super lent !   
`docker-compose up --build`   
### Lancement avec le Dockerfile
`docker build --tag node-docker .`  
`docker run -it node-docker`   
### Suppression   
`docker rmi $(docker images -q)`