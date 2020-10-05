// importing
const config  			= require('./storage/config/config.json');
const Discord 			= require('discord.js'); 
const fs			= require('fs');

const client  			= new Discord.Client();
client.commands 		= new Discord.Collection();
client.events 			= new Discord.Collection();


// event handler
const eventFiles 		= fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event 		= require(`./events/${file}`);
    const eventName 	= file.split(".")[0];
    console.log(`[+] Loading Event - ${eventName}`);
    client.on(eventName, event.bind(null, client));
}


// command handler
const commandFiles 		= fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command 		= require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`[+] Loading Command - ${command.name}`);
}

// login
client.login(config.token);
