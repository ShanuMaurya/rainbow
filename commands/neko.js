const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
  if(message.channel.nsfw) {
    neko.getNSFWNeko().then((url1) => message.channel.send({
      file: url1.url
    })
    );
  }
 if(!message.channel.nsfw) {
      neko.getSFWNeko().then((url1) => message.channel.send({
        file: url1.url
      })
      );
  };
}

exports.help = {
    name: 'neko',
    usage: "neko",
    description: "generate a neko uWu"
};
