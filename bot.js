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
client.login(process.env.NTExNjMyMTEwNTE2MTc0ODY5.Ds8otg.ITu-Ikdzt0oD5Wwi6FWc8e2-A28);
