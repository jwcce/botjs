module.exports = {
    name: 'help',
    aliases: ["help", "ajuda"],
    description: "Show command options",
    category: "Information",

    execute(client, message) {
    	message.channel.send('> `!file {Challenge_Number}`\n> `!hint {Challenge_Number}`\n> `!flag <Flag>` _Flag Format: cc{}_\n> `!source`\n> ⠀⠀⠀⠀⠀⠀⠀⠀⠀\n> **Challenges availables:** 1');
    },
};
