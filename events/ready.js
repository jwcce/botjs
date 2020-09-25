module.exports = (client) => {
	console.log(`[~] Running with ${client.user.tag}`);
	client.user.setActivity(`!help`);
}