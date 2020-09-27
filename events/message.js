const Discord           = require("discord.js");
const { prefix } 	= require('../storage/config.json');

module.exports          = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    const args          = message.content.slice(prefix.length).trim().split(/ +/g);

    const commandName   = args.shift().toLowerCase();

    const command       = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(client, message, args);
        console.log(`[+] ${message.author.tag} has used ${commandName}`);
    }
    catch (e) {
        console.error(e);
    }
}
