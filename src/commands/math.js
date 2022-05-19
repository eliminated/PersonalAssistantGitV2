const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "math",
    description: "Displays math commands.",
    category: "math",
    args: false,
    usage: "None",
    aliases: ["m"],
    async execute(client, message, args, Discord) {
        // Get commands with the category 'math'
        const math_commands = client.commands.filter(cmd => cmd.category === "math");
        const maths = math_commands.map(cmd => cmd.name);
        const li = [];
        // put all math commands except for 'math' itself into an array
        for(let i = 0; i < maths.length; i++) {
            if(maths[i] !== "math") {
                li.push(maths[i]);
            } else {
                continue;
            }
        }
        console.log(li);
        // Create embed
        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('__**MATH COMMANDS**__')
            .setDescription('Get help on a specific command,\n or all commands, by using the `-!help` command.')
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
        // Add fields to the embed
        for(let i = 0; i < li.length; i++) {
            embed.addFields(
                { name: `**${li[i]}**`, value: `\`Description:\` ${client.commands.get(li[i]).description}\`\nUsage:\` ${client.commands.get(li[i]).usage}`, inline: true },
            );
        }

        message.reply({embeds: [embed]});

    }
}