const { prefix, channel }   = require('../storage/config/config.json');
const chall                 = require('../storage/config/chall.json');
const Discord		    = require('discord.js');

module.exports              = {
    name: 'flag',
    aliases: ['verify', 'flagverify', 'verifyflag'],
    description: "Command to verify a flag",
    category: "CTF",
    
    execute(client, message, args) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        if (!args.length) {
            return message.channel.send(`You didn't write a flag ${message.author}!`);
        } 

        // setting flag 1
        else if (args[0] === chall.flag1) {
            message.delete();
	    const privateEmbed = new Discord.MessageEmbed()
	        .setTitle('First Challenge')
		.setColor('#a632a8')
		.setDescription('You found the first flag!')
            message.author.send(privateEmbed);

	    const publicEmbed = new Discord.MessageEmbed()
		.setTitle('First Challenge')
		.setColor('#a632a8')
		.setDescription(`<@` + message.author.id + `>` + ` ` + `found the first flag!`)
            client.channels.cache.get(channel).send(publicEmbed);

            setTimeout(() => { console.log(`[+] ${message.author.tag} found the flag from challenge 1!`); }, 2000);
        } else {
            message.author.send('Wrong answer!');
        }
    },
};
