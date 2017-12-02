const Discord = require('discord.js');
const client = new Discord.Client();
// this must be this way
client.login(process.env.BOT_TOKEN);
 
// Comando Ajuda
bot.on('message',message => {
    if (message.content.startsWith('>help')){
        message.author.send('```Olá TENNO, você acabou de acorda da CRYOGÊNESYS?  Já sei, o ORDIS não lhe ensinou como operar essa máquina... É muito simples, basta digitar ">+ nome da arma ou warframe tudo junto". Exemplo: :>orthos.Caso a build que você procure  não tenha, contate o administrador! ou envie a sua. OBS: este bot ainda esta em desenvolvimento...```');
    }
});
