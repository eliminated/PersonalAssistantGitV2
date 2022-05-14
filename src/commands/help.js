module.exports = {
    name: 'help',
    description: 'Shows all commands',
    async execute(client, message, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Commands')
            .setDescription('All commands are listed below.')
            .addFields(
                { name: '**ping**', value: 'Get your message\'s ping.' },
                { name: '**help**', value: 'Shows all commands.' },
                { name: '**calculate**', value: 'Calculates a math expression.' },
            )
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`);
        message.reply({embeds: [embed]});
    }
}