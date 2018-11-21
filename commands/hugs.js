const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
    neko.getSFWHug().then((hug) => message.channel.send({
      file: hug.url
    })
  );
};

exports.help = {
    name: 'hugs',
    usage: "hugs",
    description: "big Hug boi"
};