module.exports = {
    name: 'calculate',
    description: 'Calculates a math expression.',
    usage: '-!calculate <expression>',
    async execute(client, message, args, Discord) {
        if(!args[0]) return message.channel.send('Please provide a math expression.');
        // Example Usage: !calculate 1 + 1
        // Function required user to seperate between two numbers and the operator. I.e. !calculate <number> <operator> <number>
        try {
            const result = eval(args.join(' '));
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**RESULT**__')
                .setDescription(`**Input**: \`\`\`${args.join(' ')}\`\`\`\n**Output**: \`\`\`${result}\`\`\``)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
                // Show steps by using for loop in one line without creating new fields.
                for(let i = 0; i < args.length; i++) {
                    embed.addFields({ name: `Step ${i + 1}`, value: `\`\`\`${args[i]}\`\`\``, inline: true });
                }
            message.reply({embeds: [embed]});
        } catch(e) {
            message.channel.send(`Error: ${e}`);
        }
    }
}
