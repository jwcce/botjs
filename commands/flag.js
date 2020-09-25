const { prefix, channel }   = require('../config.json');
const chall                 = require('../chall.json');

module.exports              = {
    name: 'flag',
    aliases: ['verify', 'flagverify', 'verifyflag'],
    description: "Command to verify a flag",
    category: "CTF",
    
    execute(client, message) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args          = message.content.slice(prefix.length).trim().split(/ +/g);
        const command       = args.shift().toLowerCase();


        if (!args.length) {
            return message.channel.send(`You didn't write a flag ${message.author}!`);
        } 

        // setting flag 1
        else if (args[0] === chall.flag1) {
            message.delete();
            message.author.send('Congrats, you found the flag!');
            client.channels.cache.get(channel).send(`<@` + message.author.id + `>` + ` ` + `found the flag from challenge 1!`);
            setTimeout(() => { console.log(`[+] ${message.author.tag} found the flag from challenge 1!`); }, 2000);
        } else {
            message.author.send('Wrong answer!');
        }
    },
};