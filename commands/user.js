const Discord = module.require('discord.js');

exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(add8e6)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Account created at:", message.author.createdAt)

        message.channel.send(userinf);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(memberInfo.user.avatarURL)
		.setDescription("This is the user's info!")
        .setColor(add8e6)
        .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`, true)
        .addField("ID:", memberInfo.id, true)
        .addField("Account created at:", memberInfo.user.createdAt)

        message.channel.send(userinfoo);
  }
}

exports.help = {
    name: 'user',
    usage: "user",
    description: "Gets you a specific user's info"
};