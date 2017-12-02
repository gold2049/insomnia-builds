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


// Procfile //
worker: node bot.js

// package.json //

{
  "name": "builds",
  "version": "1.0.0",
  "description": "",
  "main": "bot.js",
  "scripts": {
    "test": "ping"
  },
  "author": ".floyd",
  "license": "ISC"
}


bot.login('Mzg1NDg5NzIyNjMxMjU4MTIy.DQCH5A.91bIw2WQ_JUE_Wk2DTy1TFpAVvs');
