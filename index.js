const Discord = require('discord.js');
const bot = new Discord.Client();
client.on('ready', () => {
console.log ('I am ready!');
});

client.on('message', message => {
If(message.content === 'ping') {
message.reply('pong');
}
});

// this must be this way
client.login(process.env.BOT_TOKEN);
