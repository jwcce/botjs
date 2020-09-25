module.exports = {
    name: 'help',
    aliases: ["help", "ajuda"],
    description: "Show command options",
    category: "Information",

    execute(client, message) {
    	message.channel.send('> `!file {Challenge_Number}`, to get the challenge files\n> `!hint {Challenge_Number}`, to get a hint\n> `!flag <Flag>`, to verify the flag.\n> _Flag Format: cc{}_ \n> ⠀⠀⠀⠀⠀⠀⠀⠀⠀\n> **Challenges availables:** 1');
    },
};