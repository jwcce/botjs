const { prefix } 	    = require('../storage/config/config.json');
const Discord               = require('discord.js');

module.exports              = {
    // CMD INFORMATION
    name: 'hint',
    aliases: ['dica'],
    description: "Command to get a hint",
    category: "CTF",
    
    execute(client, message, args) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        if (!args.length) {
            return message.channel.send(`You didn't choose a challenge ${message.author}!`);
        } 

        else if (args[0] === '1') {
	    const embed = new Discord.MessageEmbed()
		.setTitle('Hint')
		.setColor('#a632a8')
		.setDescription('|| **steganography** ||')
            message.channel.send(embed);
        }

        else {
            message.channel.send('Challenge not found.')
        }
    },
};
