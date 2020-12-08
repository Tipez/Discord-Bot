const axios = require('axios').default;

module.exports = {
    name: 'jokecount',
    description: 'Renvoie le nombre de Chuck joke disponible depuis l\'API.',
    url: 'http://api.icndb.com/jokes/count',
    execute(message) {
        const url = 'http://api.icndb.com/jokes/count'
        axios.get(url).then(response => {
            message.channel.send(response['data']['value'])
        })
    },
    result() { 
        axios.get('http://api.icndb.com/jokes/count').then(response => {
            return response['data']['value']
        })
    }
};