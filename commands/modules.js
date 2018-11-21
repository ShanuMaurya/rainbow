const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
	
	
	 message.delete();
  var moduleembed = new Discord.RichEmbed()
    .setAuthor(`fᏒuᎥᏆᎽ WORKING RIGHT NOW!`, "https://cdn.discordapp.com/avatars/507778684455878667/07211c86fce4c43d071ec10eee6eeea4.png?size=2048")
	.setDescription("❯ Module name [module shortcut]")
    .setColor(1730)
    // .addField("Modules:")
    .addField("Modules:", [
	 "❯ Administration [Admin]",
	 "❯ Fun",
	 "❯ NSFW",
	 "❯ Searches"
	]
)   
    .setFooter(`Requested by: Wat you think u asked that`)
	  message.channel.send(moduleembed);

	// message.channel.send(`= Info for ${command.help.name} =\n\n [Description: ${command.help.description}]`, {code: asciidoc});
	
};

exports.help = {
    name: 'modules'
};
