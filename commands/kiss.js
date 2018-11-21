const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
  if(message.channel.nsfw) {
    neko.getSFWKiss().then((kiss) => message.channel.send({
      file: kiss.url
    })
    );
  }
}

exports.help = {
    name: 'kiss',
    usage: "kiss",
    description: "kissu for anyone"
};