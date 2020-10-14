// importing
const config 	= require('./src/storage/config/config.json');
const chall	= require('./src/storage/config/chall.json');
const Discord	= require('discord.js');
const jsonfile	= require('jsonfile'); 
const express	= require('express');
const ngrok	= require('ngrok');
const path	= require('path');
const fs	= require('fs');
const router	= express.Router();
const app	= express();
const port	= 3000;

const client  	= new Discord.Client();
client.commands = new Discord.Collection();
client.events 	= new Discord.Collection();


// banner
console.log(`
 ▄▄·  ▄ .▄ ▄▄▄· ▄▄▌  ▄▄▌        ▄▄▄▄▄
▐█ ▌▪██▪▐█▐█ ▀█ ██•  ██•   ▄█▀▄ •██  
██ ▄▄██▀▀█▄█▀▀█ ██ ▪ ██ ▪ ▐█▌.▐▌ ▐█.▪
▐███▌██▌▐▀▐█▪ ▐▌▐█▌ ▄▐█▌ ▄▐█▌.▐▌ ▐█▌·
·▀▀▀ ▀▀▀ · ▀  ▀ .▀▀▀ .▀▀▀  ▀█▄▀▪ ▀▀▀ 
`);


// BOT
// event handler
const eventFiles 	= fs.readdirSync('./src/events/').filter(file => file.endsWith('.js'));
for(const file of eventFiles) {
    const event 	= require(`./src/events/${file}`);
    const eventName = file.split(".")[0];
    console.log(`[+] Loading - ${eventName}`);
    client.on(eventName, event.bind(null, client));
}

// command handler
const commandFiles 	= fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command 	= require(`./src/commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`[+] Loading - ${command.name}`);
}

// login
client.login(config.token);


// -- WEB -- 
// express
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(port);

// ngrok
(async function() {
        await ngrok.authtoken(config.ngrok);
        const url = await ngrok.connect(port);
        console.log(`[+] Tunnel -> ${url}`);

        var tunnel = { 'link': url };
        jsonfile.writeFile('./src/storage/config/tunnel.json', tunnel, {spaces:4});
})();
