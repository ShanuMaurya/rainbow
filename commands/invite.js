const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
	
   message.delete();
  message.channel.send("",
	  embed.setTitle("Invite link:"),
	  embed.setDescription("[Invite me frnd](https://discordapp.com/oauth2/authorize?client_id=507778684455878667&permissions=8&scope=bot)")

)};

exports.help = {
    name: 'invite',
    usage: "invite",
    description: "invite link for bot"
};
