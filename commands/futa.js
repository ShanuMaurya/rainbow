const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
  if(message.channel.nsfw) {
    neko.getNSFWFutanari().then((futa) => message.channel.send({
      file: futa.url
    })
    );
  }
}

exports.help = {
    name: 'futa',
    usage: "futa",
    description: "this command is only for the big baka oppai emoji boi"
};