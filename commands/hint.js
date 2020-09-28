const { prefix } 	    = require('../storage/config/config.json');

module.exports              = {
    // CMD INFORMATION
    name: 'hint',
    aliases: ['dica'],
    description: "Command to get a hint",
    category: "CTF",
    
    execute(client, message, args) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        // const args          = message.content.slice(prefix.length).trim().split(/ +/);

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
