module.exports = {
    name: 'source',
    aliases: ['codigo'],
    description: "Command to get the bot source link",
    category: "Info",
    
    execute(client, message) {
        message.channel.send('Ey, if you like the project, leave a :star:!  \nhttps://github.com/jwcce/challot');
    },
};
