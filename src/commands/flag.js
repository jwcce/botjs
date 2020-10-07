const { prefix, channelid } = require('../storage/config/config.json');
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
	if (Object.getOwnPropertyNames(chall).includes(args[0])) {
            message.delete();
	    const privateEmbed = new Discord.MessageEmbed()
	        .setTitle('Challenge')
		.setColor('#a632a8')
		.setDescription('You found the flag! Now, go to the next!')
            message.author.send(privateEmbed);

	    const publicEmbed = new Discord.MessageEmbed()
		.setTitle('Challenge')
		.setColor('#a632a8')
		.setDescription(`<@` + message.author.id + `>` + ` ` + `found a flag!`)
            client.channels.cache.get(channelid).send(publicEmbed);

            setTimeout(() => { console.log(`[+] ${message.author.tag} found a flag!`); }, 2000);
        } else {
            message.author.send('Wrong answer!');
        }
    },
};
