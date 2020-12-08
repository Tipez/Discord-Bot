const fs = require('fs');

module.exports = {
    name: 'prefix',
    description: 'Change le prefix',
    execute(message, args) {

        let prefix = JSON.parse(fs.readFileSync("commands/prefixes.json", "utf8"))
        prefix = {
            prefix: args[0]
        }

        // vérifier que arg[0] appartient à une liste de préfixe avant de le modifier
        // si oui le changer
        // si non, renvoyer sur le channel un message comme quoi le préfix n'est pas autorisé

        console.log(args[0])
        if (['%', '!', '#'].includes(args[0])) {
            fs.writeFile("commands/prefixes.json", JSON.stringify(prefix), (err) => {
                if (err) console.log(err)
            })


            return message.channel.send("new prefix: " + args[0] + JSON.stringify(prefix))
        }

        return message.channel.send("le prefixe ne fait pas parti de la liste ['%', '!', '#']")


    }

};