const client = require('nekos.life');
const neko = new client();

exports.run = (bot, message, args) => {
    neko.getSFWBaka().then((baka) => message.channel.send({
      file: baka.url
    })
  );
};

exports.help = {
    name: 'baka',
    usage: "baka",
    description: "big baka boi"
};
