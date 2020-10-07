const fs	= require('fs');
const jsonfile	= require('jsonfile');
const readline  = require('readline');
const resp      = '';
const rl        = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});


rl.question("config path: (src/storage/config/) \n-> ", function(path) {
	if (!fs.existsSync('../' + path + 'config.json')) {
		rl.question("token: \n-> ", function(tokeN) {
        	rl.question("prefix: \n-> ", function(prefiX) {
        	rl.question("owner id: \n-> ", function(ownerID) {
		rl.question("channel id: \n-> ", function(channelID) {
                      	var config = {
                              	'token': tokeN,
                               	'prefix': prefiX,
                               	'ownerid': ownerID,
				'channelid': channelID
                       	}
                   	jsonfile.writeFile('../' + path + 'config.json', config, {spaces:4});
			rl.close();
		});
               	});
       		});
		});
	} else {
		rl.close();
	}
});
