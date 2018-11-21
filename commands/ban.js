const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
    return message.reply("You don't have enough permissions."
  );

  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Mention a valid user please."
  );
  if(!member.bannable)
    return message.reply("Sorry, The person your trying to ban has a higher role than mine."
  );

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";

  bot.on('message', async message => {
  var bannedem = new Discord.RichEmbed()
	.setTitle("Banned User"),
	.addField(`${member.user.tag} has been banned`, `by ${message.author.tag} because ${reason}`)
	
	message.channel.send(bannedem);
  );
  });
};

exports.help = {
    name: 'ban',
    usage: "ban",
    description: "ban users using this"
};
