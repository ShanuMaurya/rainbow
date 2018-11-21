const Discord = module.require('discord.js');

var Responses = [
    "Yes",
    "No",
    "Maybe",
    "I don't know >///////<",
    "Of course no.",
    "I mean i guess so. >.<",
    "If you say so.",
    "I'm not saying anything, you already know the answer >w<",
    "Definetely not",
    "It's a possibility",
    "You better hope so",
    "You better not hope so"
];

exports.run = async (bot, message, args) => {

	console.log(`---------------------`);
	console.log(`${message.author.username}#${message.author.discriminator} has used the love command.`);
	console.log(`---------------------`);

    if(!args[0]){
        return message.channel.send(":x: " + "| Mention a user so i can calculate the love.")
    }

    if (args[0]) {
        message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}

exports.help = {
    name: 'love',
    usage: "love",
    description: "Make the send how much love does it have for the person."
};