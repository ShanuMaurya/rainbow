const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
	var kickedem = new Discord.RichEmbed()
	  .setTitle("Error:")
	  .setDescription("You don't have enough permissions.")
	  
	  message.channel.send(kickedem);
	  
  if(!member)
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`Please mention a valid user. senpaiii ^w^`)
  );
  if(!member.kickable)
    return message.reply("",
      embed.setTitle(`Error:`),
      embed.setDescription(`Gomenasaii!!! (sorry) the person you wanted to ban has higher role than me ;-;`)
  )

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  bot.on('message', async message => {
  message.reply(``,
    embed.setTitle(`Senpaii i kicked the user you wanted me to kick! ^w^`),
    embed.addField(`${member.user.tag} has been kicked`, `by ${message.author.tag} because: ${reason}`, true)
  );
  });
}

exports.help = {
    name: 'kick',
    usage: "kick",
    description: "A command used to kick people from a discord server."
};