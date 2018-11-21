exports.run = async (bot, message, args) => {

if(message.member.hasPermission("MANAGE_MESSAGES")) {
  let messagecount = parseInt(args[0]);

  if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please enter a valid number!");

  if(messagecount > 100){
    message.channel.send(":: " + "| I have limits, i'm sorry, i only can clear up to 100 messages at once.")
  }else if(messagecount < 1 ) {
    message.channel.send(":x: " + "| I have limits, i'm sorry, i only can clear up to 100 messages at once.")
  } else {

  }{
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
  }
} else {
  return message.reply(":x: " + "| You need to have the \"MANAGE_MESSAGES\" permission to remove messages.")
}
}

exports.help = {
    name: 'clear',
    usage: "clear",
    description: "Clear messages easily, choose a number between 1 - 100"
};