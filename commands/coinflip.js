const Discord = module.require('discord.js');

var hd = [
    "Heads",
    "Tails"
];

exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " And the winner is" + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.help = {
    name: 'coinflip',
    usage: "coinflip",
    description: "A simple coinflipping command."
};