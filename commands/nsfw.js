const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
	
	 message.delete();
  var NSFWembed = new Discord.RichEmbed()
  
    
	// .setAuthor("fᏒuᎥᏆᎽ WORKING RIGHT NOW!")
	//.setAuthor("https://i.pinimg.com/736x/f3/33/1b/f3331b0feb40c6505478a895f7bf24ca--rainbow-hair-kawaii-anime.jpg")
	.setDescription(`Use .h <command> or .help <command> to see help of the commands.`)
    .setColor(1730)
   // .addField("Administration commands:")
    .addField("NSFW commands:", [
	 "❯ Loli",
	 "❯ Neko",
	 "❯ Yuri",
	 "❯ Futa",
	 "❯ Oppai",
	 "❯ Floppai"
	 
	]
)   
    .setFooter("This is the footer text, it can hold 2048 characters")
   // .setImage("http://image.blingee.com/images19/content/output/173/173/173/799/775428745_1146246.gif")
	  message.channel.send(NSFWembed);

	// message.channel.send(`= Info for ${command.help.name} =\n\n [Description: ${command.help.description}]`, {code: asciidoc});
	
};

exports.help = {
    name: 'nsfw',
	description: 'Gives the list of NSFW cmds'
};
