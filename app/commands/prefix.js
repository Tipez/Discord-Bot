const fs = require('fs');

module.exports = {
    name: 'prefix',
    description: 'Change le prefix',
    execute(message, args) {

        let prefix = JSON.parse(fs.readFileSync("commands/prefixes.json", "utf8"))
        prefix = {
            prefix: args[0]
        }

        fs.writeFile("commands/prefixes.json", JSON.stringify(prefix), (err) => {
            if (err) console.log(err)
        })


        message.channel.send("new prefix: " + args[0] +  JSON.stringify(prefix))
        
        
    }

};