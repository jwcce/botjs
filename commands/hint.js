const { prefix } = require('../config.json');

module.exports              = {
    // CMD INFORMATION
    name: 'hint',
    aliases: ['dica'],
    description: "Command to get a hint",
    category: "CTF",
    
    execute(client, message) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args          = message.content.slice(prefix.length).trim().split(/ +/g);
        const command       = args.shift().toLowerCase();


        if (!args.length) {
            return message.channel.send(`You didn't choose a challenge ${message.author}!`);
        } 

        else if (args[0] === '1') {
            message.channel.send('> Hint: || **STEGHIDE** ||');
        }

        else {
            message.channel.send('Challenge not found.')
        }
    },
};