const axios = require('axios').default;

module.exports = {
    name: 'jokerandom',
    description: 'Renvoie une joke au hasard.',
    execute(message) {
        const url = 'http://api.icndb.com/jokes/random';
        axios.get(url).then((response) => {
            message.channel.send('joke n° ' + response['data']['value']['id'] + '\n' + response['data']['value']['joke'])
        })

    }
};