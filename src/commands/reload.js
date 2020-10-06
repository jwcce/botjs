const Discord                           = require('discord.js');

module.exports 				= {
	name: 'reload',
    	aliases: ["load"],
    	description: "Reload a command.",
    	category: "Config",
	execute(client, message, args) {
		if (!args || args.length < 1) return message.reply('Must specify a command to reload');
		const commandName 	= args[0];

		if (!client.commands.has(commandName)) {
			return message.reply('Unknow command');
		}

		delete require.cache[require.resolve(`./${commandName}.js`)];

		client.commands.delete(commandName);
		const props 		= require(`./${commandName}.js`);
		client.commands.set(commandName, props);

		const embed = new Discord.MessageEmbed()
		    .setTitle('Reload')
		    .setColor('#a632a8')
		    .setDescription(`Command ${commandName} reloaded`)
		message.author.send(embed);
	},
};
