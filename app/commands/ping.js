module.exports = {
    name: 'ping',
    description: '🏓 et retourne le delai en ms',
    execute(message) {
            const timeTaken = Date.now() - message.createdTimestamp;
            message.channel.send(`🏓 : ${timeTaken}ms.`);
    }
};