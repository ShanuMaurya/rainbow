const Discord = require("discord.js");
const embed = require('discord-embed-maker');



exports.run = (bot, message, args) => {
	
	 message.delete();
	
  var funembed = new Discord.RichEmbed()
	// .setAuthor("fᏒuᎥᏆᎽ WORKING RIGHT NOW!")
	.setDescription("Use .h <command> to see help of the commands.")
    .setColor(173)
   // .addField("Fun commands:")
    .addField("Fun commands:", [
	 "❯ RolePlay,[rp]",
	 "❯ Coinflip",
	 "❯ 8Ball",
	 "❯ Say",
	 "❯ Baka"
	 
	 
	]
)   
    .setFooter(`Requested by: A unknown pepkn`)
	  message.channel.send(funembed);

	// message.channel.send(`= Info for ${command.help.name} =\n\n [Description: ${command.help.description}]`, {code: asciidoc});
	
};

exports.help = {
    name: 'fun',
	description: 'Gives the list of Fun cmds'
};
