const Discord = require("discord.js")
const fs = require('fs');

module.exports = {
    name: 'help',
    description: 'Renvoie une aide sur les commandes',
    execute(message, args) {
        let prefix = JSON.parse(fs.readFileSync("commands/prefixes.json", "utf8"))
        const url = 'http://raw.communitydragon.org/latest/game/assets/loadouts/summoneremotes/flairs/flag_sad_white_vfx.png'
        const id = parseInt(args[0])
        const help = new Discord.MessageEmbed()
            .setColor('FF9955')
            .setTitle(`${prefix.prefix}HELP is here`)
            .setDescription(`Pour en voir plus, vueillez taper ${prefix.prefix}HELP[i] ou i∈[1:3] pour voir la suite`)
        if (id === 1) {
            const help1 = new Discord.MessageEmbed()
                .setColor('FF9955')
                .setTitle(`${prefix.prefix}HELP is here`)
                .addField(`${prefix.prefix}joke`, 'Renvoie une joke au hasard', false)
                .addField(`${prefix.prefix}jokeCategories`, 'Renvoie les catégories disponibles pour les Chuck jokes.', false)
                .addField(`${prefix.prefix}jokeCount`, 'Renvoie le nombre de Chuck jokes disponible depuis l\'API.', false)

            return message.channel.send(help1)
        } else if (id === 2) {
            const help2 = new Discord.MessageEmbed()
                .setColor('FF9955')
                .setTitle(`${prefix.prefix}HELP is here`)
                .addField(`${prefix.prefix}joke[categorie]`, 'Renvoie une random Chuck joke pour la cétégorie spécifiée', true)
                .addField(`${prefix.prefix}joke[id]`, 'Renvoie la Chuck joke correspondant à l\'id saisie')
                .addField(`${prefix.prefix}ping`, '🏓 et retourne le delai en ms')
            return message.channel.send(help2)
        } else if (id === 3) {
            const help3 = new Discord.MessageEmbed()
                .setColor('FF9955')
                .setTitle(`${prefix.prefix}HELP is here`)
                .addField(`${prefix.prefix}prefix[new_prefix]`, 'Change le préfixe')
            return message.channel.send(help3)
        }
        message.channel.send(help)
    }
};