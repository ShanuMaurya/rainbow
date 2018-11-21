const Discord = require('discord.js');

var fortunes = [
    "Yes",
	"Yeah",
	"Yep",
    "No",
	"Nah",
	"Nope"
    "maybe",
    "I don't know",
	"I don't think so",
	"I'm busy let's talk later."
];

exports.run = async (bot, message, args) => {

    if(!args[0]){
  return message.channel.send(":x: " + "| Enter a question that you want to be answered")
}
   if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)])
   else message.channel.send(":x: " + "| I'm unable to read that.");
};

exports.help = {
    name: '8ball',
    usage: "8ball",
    description: "Answers a question that you want to be answered."
};