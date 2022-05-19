module.exports = {
    name: 'percentage',
    description: 'Calculates the percentage of a number.',
    category: 'math',
    args: true,
    usage: '-!percentage <number> <out of>',
    aliases: ['percent', 'prc'],
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            message.channel.send(`Please provide a number.`);
            return;
        } else if(!args[1]) {
            message.channel.send(`Please provide a number to divide by.`);
            return;
        } else {
            let percentage = Math.round((args[0] / args[1]) * 100);
            let value1 = args[0];
            let out_of = args[1];
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**PERCENTAGE**__')
                .setDescription('Converts a number to a percentage.')
                .addFields(
                    { name: 'Result', value: `${percentage}%`, inline: true },
                    { name: 'Steps', value: `${value1} / ${out_of} * 100`, inline: true },
                )
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
        }
    }
}