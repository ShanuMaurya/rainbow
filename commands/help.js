const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
	 
	  message.delete();
  var helpem = new Discord.RichEmbed()
	  .setAuthor(`fᏒuᎥᏆᎽ WORKING RIGHT NOW!`, "https://cdn.discordapp.com/avatars/507778684455878667/07211c86fce4c43d071ec10eee6eeea4.png?size=2048")
	.setDescription("More commands coming soon....")
 
    .setColor(173)  
    .addField("Please use bot commands in bot section danqu", "For prefix :point_right: ***``Prefix pls``***")
    .addField("Main commands:", [
	 "▸ invite",
	 "▸ Module [shows all commands modules]",
	]
)   
    .setFooter(`Requested by: Wat you think u asked that`)
	message.channel.send(helpem);
	
     
};

exports.help = {
    name: 'help',
    usage: "help",
    description: "help command"
};
