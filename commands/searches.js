const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
	
	
	message.delete(2);
  var searchesembed = new Discord.RichEmbed()
	// .setAuthor("fᏒuᎥᏆᎽ WORKING RIGHT NOW!")
	.setDescription("Use .h <command> or .help <command> to see help of the commands.")
    .setColor(1730)
   // .addField("Administration commands:")
    .addField("Searches cmds:", [
	 "❯ Google :point_left: only :sweat_smile: "
	 // "❯ ",
	 // "❯ User",
	 // "❯ Clear"
	 
	]
)   
    .setFooter(`Requested by: A unknown pepkn`)
	  message.channel.send(searchesembed);

	// message.channel.send(`= Info for ${command.help.name} =\n\n [Description: ${command.help.description}]`, {code: asciidoc});
	
};

exports.help = {
    name: 'searches',
	description: 'Gives the list of Admin cmds'
};
