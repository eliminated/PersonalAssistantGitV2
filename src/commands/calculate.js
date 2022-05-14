module.exports = {
    name: 'calculate',
    description: 'Calculates a math expression.',
    async execute(client, message, args, Discord) {
        if(!args[0]) return message.channel.send('Please provide a math expression.');
        try {
            const result = eval(args.join(' '));
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**RESULT**__')
                .setDescription(`**Input**: \`\`\`${args.join(' ')}\`\`\`\n**Output**: \`\`\`${result}\`\`\``)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
        } catch(e) {
            message.channel.send(`Error: ${e}`);
        }
    }
    
    
}
