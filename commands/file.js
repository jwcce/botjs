const { prefix } 		= require('../storage/config.json');
const { MessageAttachment } 	= require('discord.js');

module.exports 			= {
    name: 'file',
    aliases: ["file"],
    description: "Send challenge files",
    category: "Information",

    execute(client, message) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args          	= message.content.slice(prefix.length).trim().split(/ +/g);
        const command       	= args.shift().toLowerCase();


        if (!args.length) {
            return message.channel.send(`You didn't choose a challenge ${message.author}!`);
        } 

        else if (args[0] === '1') {
        	const attach    = new MessageAttachment('./storage/1.zip');

        	message.channel.send(attach)
        } 

        else {
        	message.channel.send('File not found.')
        }
    },
};
