const axios = require('axios').default;

module.exports = {
    name: 'jokerandomcategory',
    description: 'Renvoie une random Chuck joke pour la cétégorie spécifiée',
    execute(message, args) {
        const categories = args[0].toString().toLowerCase()
        const url = 'http://api.icndb.com/jokes/random?exclude=[nerdy]'
        axios.get(url + '[' + categories + ']').then(res => {
            message.channel.send(res['data']['value']['joke'])
        })
    }
};