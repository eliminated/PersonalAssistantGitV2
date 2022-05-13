const Discord = require('discord.js');
const { MessageAttachment, MessageEmebd } = require('discord.js');
module.exports = {
  name: 'ping',
  description: 'pong',
  execute(msg, args){
    // Gives user's latency
    let pingEmbed = new Discord.MessageEmbed()
    .setTitle("__**Ping**__")
    .setColor("#00ff00")
    .addFields(
      { name: "Ping", value: `${msg.client.ws.ping}ms`, inline: true },
      { name: "Message Latency", value: `${msg.createdTimestamp - msg.createdTimestamp}ms`, inline: true },
      { name: "API Latency", value: `${Math.round(msg.client.ws.ping)}ms`, inline: true }
                )
    msg.reply({embeds: [pingEmbed]});
    
  }
}