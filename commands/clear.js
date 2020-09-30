module.exports = {
	name: 'clear',
	aliases: ['limpar'],
	description: 'clear messages',

	execute (client, message, args) {
                if (!message.member.roles.cache.some(r => [
                        '752869889156317205',
                        '752871415946018827',
                        '756992130886664213'
                ].includes(r.id))) {
			message.delete();
                        message.channel.send(`${message.author} restrict command`);
		} else if (!args[0]) { 
			message.channel.send('You haven\'t given an amount to be deleted!');
		} else {
			message.delete();
			message.channel.messages.fetch({ limit: args[0] }).then(messages => {
   		 		message.channel.bulkDelete(messages);
			});
		}
	}
}
