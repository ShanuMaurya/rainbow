const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  var Administratorembed = new Discord.RichEmbed()
	// .setAuthor("fᏒuᎥᏆᎽ WORKING RIGHT NOW!")
	.setDescription("Use .h <command> to see help of the commands.")
    .setColor(173)
   // .addField("Administration commands:")
    .addField("Administration commands:", [
	 "❯ Ban",
	 "❯ Kick",
	 "❯ User",
	 "❯ Clear"
	 
	]
)   
    .setFooter(`Requested by: A unknown pepkn`)
	  message.channel.send(Administratorembed);

	// message.channel.send(`= Info for ${command.help.name} =\n\n [Description: ${command.help.description}]`, {code: asciidoc});
	
};

exports.help = {
    name: 'administrator',
	description: 'Gives the list of Admin cmds'
};
