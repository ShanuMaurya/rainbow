const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
  if(message.channel.nsfw) {
    neko.getNSFWTits().then((oppai) => message.channel.send({
      file: oppai.url
    })
    );
  }
}

exports.help = {
    name: 'oppai',
    usage: "oppai",
    description: "this command for big oppai"
};