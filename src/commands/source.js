module.exports = {
    name: 'source',
    aliases: ['codigo'],
    description: "Command to get the bot source link",
    category: "Info",
    
    execute(client, message) {
        message.channel.send('https://github.com/jwcce/challot');
    },
};
