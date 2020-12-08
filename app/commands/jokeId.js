const axios = require('axios').default;

module.exports = {
    name: 'jokeid',
    description: 'Renvoie la Chuck joke correspondant à l\'id saisie',
    execute(message, args) {
        const id = parseInt(args[0])
        const url = 'http://api.icndb.com/jokes/'
        axios.get(url + id).then(res => {
            message.channel.send(res['data']['value']['joke'])
        })
    }
};