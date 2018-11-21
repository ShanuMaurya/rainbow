const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  var bioem = new Discord.RichEmbed()
    .setAuthor("My Biography:")
    .setThumbnail(bot.user.avatarURL)
    .setColor(0x00FF00)
    .addField("Full Username:", "NOT AVAILABLE YET!", true)
    .addField("Gender / Age:", "Female / 10", true)
    .addField("Created at:", "11/02/2018 10:00 AM GMT +0530")
	.addField("Created with:", "Discord.js", true)
	.addField("Zodiac:", "Scorpio", true)
	.addField("Nationality:", "Discordish :minidisc:", true)
	.addField("Programs used:", "Notepad++", true)
	
	message.channel.send(bioem);
};

exports.help = {
    name: 'bio',
    usage: "bio",
    description: "Bot's bio"
};
