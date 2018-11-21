const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
    neko.getSFWSmug().then((smug) => message.channel.send({
      file: smug.url
    })
  );
};

exports.help = {
    name: 'smug',
    usage: "smug",
    description: "big smug boi"
};