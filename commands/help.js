const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ["help", "ajuda"],
    description: "Show command options",
    category: "Information",

    execute(client, message) {
    	// message.channel.send('> `!file {Challenge_Number}`\n> `!hint {Challenge_Number}`\n> `!flag {Flag}` _Flag Format: cc{}_\n> `!source`\n> ⠀⠀⠀⠀⠀⠀⠀⠀⠀\n> **Challenges availables:** 1');
	const embed = new Discord.MessageEmbed()
		.setColor('#a632a8')
	  	.setTitle('General')
    		.addFields(
			{ name: 'File', value: '!file {Challenge Number}' },
			{ name: 'Hint', value: '!hint {Challenge Number}' },
			{ name: 'Flag', value: '!flag {Flag}' },
			{ name: 'Source', value: '!source' },
		)
	    	.setTimestamp()
	    	
	message.channel.send(embed);
    },
};
