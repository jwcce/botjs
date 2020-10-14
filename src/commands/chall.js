const { prefix } 	= require('../storage/config/config.json');
const text		= require('../storage/config/text.json');
const { link }		= require('../storage/config/tunnel.json')	
const Discord		= require('discord.js');
const fs 		= require('fs');

module.exports = {
    name: 'chall',
    aliases: ["challenge"],
    description: "Send challenge info",
    category: "Information",

    execute(client, message, args) {
        fs.readdir('./src/storage/file', (err, files) => {
			const max = files.length;

			if (!message.content.startsWith(prefix) || message.author.bot) return;

			if (!args.length) {
				const embed = new Discord.MessageEmbed()
					.setTitle('Challenges')
					.setColor('#a632a8')
					.setDescription(`**${max}**`)

				message.channel.send(embed);
			} else if (max >= args[0] >= 1) {
	
        			const attach = new Discord.MessageAttachment(`./src/storage/file/${args[0]}.zip`);
	
				message.channel.send(text[args[0]], attach);
			} else {

				message.channel.send('Challenge not found.');       			
			}
		});
    },
};
