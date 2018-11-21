exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

message.delete();

if(!args.join(" ")){
  return message.channel.send(":x: " + "| What do you want me to say?")
}
message.channel.send(args.join(" "));
}

exports.help = {
    name: 'say',
    usage: "say",
    description: "make the bot say something."
};