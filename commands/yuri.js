const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
  if(message.channel.nsfw) {
    neko.getNSFWYuri().then((yuri) => message.channel.send({
      file: yuri.url
    })
    );
  }
}

exports.help = {
    name: 'yuri',
    usage: "yuri",
    description: "best yuri xddd"
};