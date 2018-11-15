const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTExNjMyMTEwNTE2MTc0ODY5.Ds8sPQ.Qit2U5HY0rxTN_6t6wdPkB4ssAg);
