const axios = require('axios').default;
const jokeRandom = require('./jokeRandom');
const jokeId = require('./jokeId');
const jokeRandomCategory = require('./jokeRandomCategory');


module.exports = {
    name: 'joke',
    description: 'Main Joke',
    execute(message, args) {

        if (args.length === 0) {
            return jokeRandom.execute(message)
        } else {
            message = message
            let id = parseInt(args[0])
            axios.get('http://api.icndb.com/jokes/count').then(response => {
                const max_joke = response['data']['value']
                if (id > max_joke || id < 1) {
                    return message.channel.send('Id de la Chuck invalide !')
                } else
                if (isNaN(id)) {
                    const categories = args[0].toString().toLowerCase()
                    if (['nerdy', 'explicit'].includes(categories)) {
                        return jokeRandomCategory.execute(message, args)
                    }
                    return message.reply('Veuillez saisir un entier valide ou une catégorie svp !')
                }
                return jokeId.execute(message, args)
            })
        }
    }
}