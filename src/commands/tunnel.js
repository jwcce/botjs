const tunnel = require('../storage/config/tunnel.json')

module.exports = {
	name: 'tunnel',
	aliases: ['site', 'website', 'ngrok'],
	execute(client, message) {
		message.channel.send(tunnel.link);
	}
}
