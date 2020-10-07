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
			.setDescription('**3**')
	
		message.channel.send(embed);
	} else if (args[0] >= 1) {
		const file = args[0];
        	const attach = new Discord.MessageAttachment(`./src/storage/file/${file}.zip`);
		switch (args[0]) {
			case '1':
				message.channel.send('These images seem too heavy...', attach);
				break;
			case '2':
				message.channel.send('Open your eyes!', attach);
				break;
			case '3':
				message.channel.send('OHHH, im blind!', attach);
				break;
		}
        } else {
        	message.channel.send('File not found.')
        }
    },
};
