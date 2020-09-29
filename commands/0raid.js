const Discord = require('discord.js');

module.exports = {
	name: '0raid',
	aliases: ['antiraid'],
	description: 'remove everyone chat perm',

	execute (client, message, args) {

		const role = message.guild.roles.cache.find(r => r.id === '753112591349579848');
	
		if (!message.member.roles.cache.some(r => [
			'752869889156317205',
			'752871415946018827',
			'756992130886664213'
		].includes(r.id))) {
			return message.channel.send(`${message.author} restrict command`);
		} else if (args[0] === 'on') {
			role.setPermissions(67109889);
			const embed = new Discord.MessageEmbed()
				.setTitle('0raid')
				.setColor('#a632a8')
				.setDescription('command enabled')
				.setTimestamp()
			message.channel.send(embed);
		} else if (args[0] === 'off') {
			role.setPermissions(67111937);
			const embed = new Discord.MessageEmbed()
				.setTitle('0raid')
				.setColor('#a632a8')
				.setDescription('command disabled')
				.setTimestamp()
			message.channel.send(embed);
		} else {
			message.channel.send('no');
		}
	}
}

