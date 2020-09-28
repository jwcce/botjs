module.exports = (client) => {
	console.log(`[~] Running with ${client.user.tag}`);
	client.user.setActivity('!help', {
		type: 'STREAMING',
		url: 'https://twitch.tv/themayor11'
	});
}
