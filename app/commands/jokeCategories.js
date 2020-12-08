const axios = require('axios').default;

module.exports = {
    name: 'jokecategories',
    description: 'Renvoie les catégories disponibles pour les Chuck jokes',
    execute(message) {
        const url = 'http://api.icndb.com/categories'
        axios.get(url).then(res => {
            message.channel.send('Les catégories disponibles sont: \n')
            for (item in res.data['value']) {
                message.channel.send(res.data['value'][item] + '\n')
            }
        })
    }
};