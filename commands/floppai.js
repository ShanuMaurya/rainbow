const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
  if(message.channel.nsfw) {
    neko.getNSFWSmallBoobs().then((floppai) => message.channel.send({
      file: floppai.url
    })
    );
  }
}

exports.help = {
    name: 'floppai',
    usage: "floppai",
    description: "the flat oppai :D"
};