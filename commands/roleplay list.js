const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  var Roleplaylistembed = new Discord.RichEmbed()
	// .setAuthor("fᏒuᎥᏆᎽ WORKING RIGHT NOW!")
	//.setDescription("Use .h <command> or .help <command> to see help of the commands.")
    .setColor(1730)
   // .addField("Administration commands:")
    .addField("Actions list:", [
	 "❯ hug",
	// "❯ confused",
	 "❯ kiss",
	 "❯ cuddle",
	// "❯ carry",
	 "❯ throw",
	// "❯ sniffle",
	 "❯ boop",
	 "❯ lick",
	 "❯ hide",
	// "❯ cry",
	// "❯ shrug",
	// "❯ smirk",
	 "❯ sleep",
	 "❯ slap",
	 "❯ punch",
	 "❯ drnk"
	// "❯ suck",
	 //"❯ baka"
	 //"❯ User"
	 
	]
)   
    .setFooter('its simple to use its like this `_hugs shanu_`')
	  message.channel.send(Roleplaylistembed);

	// message.channel.send(`= Info for ${command.help.name} =\n\n [Description: ${command.help.description}]`, {code: asciidoc});
	
};

exports.help = {
    name: 'roleplay list',
	description: 'Gives the list of roleplay'
};




