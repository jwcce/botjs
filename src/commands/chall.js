const { prefix } 		= require('../storage/config/config.json');
const Discord		 	= require('discord.js');

module.exports 			= {
    name: 'chall',
    aliases: ["challenge"],
    description: "Send challenge info",
    category: "Information",

    execute(client, message, args) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        if (!args.length) {
		const embed 	= new Discord.MessageEmbed()
			.setTitle('Challenges')
			.setColor('#a632a8')
			.setDescription('**1**')
	
		message.channel.send(embed);
	} else if (args[0] === '1') {
        	const attach    = new Discord.MessageAttachment(`./storage/file/1.zip`);
        	message.channel.send(`these images seem too heavy...`, attach)
        } else {
        	message.channel.send('File not found.')
        }
    },
};
