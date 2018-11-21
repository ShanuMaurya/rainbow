const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Vote now! (60 Seconds)");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 60000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (NO): " + `${NO_Count-1}\n` +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await message.channel.send({embed: sumsum});

}

exports.help = {
    name: 'vote',
    usage: "vote",
    description: "a simple command to vote/poll"
};