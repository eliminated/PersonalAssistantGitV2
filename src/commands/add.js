module.exports = {
    name: 'add',
    description: 'Adds two numbers.',
    category: 'math',
    args: true,
    usage: '-!add <number> <number>',
    aliases: ['a'],
    async execute(client, message, args, Discord) {
        // NOTE: User can provides more than two numbers but need at least two numbers.
        if(!args[0]) {
            let embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('__**USABILITY**__')
                .setDescription('ERROR: Please provide a number.')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
            return;
        } else if(!args[1]) {
            let embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('__**USABILITY**__')
                .setDescription('ERROR: Please provide a number.')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
            return;
        } else {
            let sum = 0;
            for(let i = 0; i < args.length; i++) {
                sum += parseInt(args[i]);
            }
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**ADDITION**__')
                .setDescription('Adds all numbers together.')
                .addFields(
                    { name: 'Result', value: `${sum}`, inline: true },
                )
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            for(let i = 0; i < args.length; i++) {
                embed.addFields(
                    { name: `Step ${i + 1}`, value: `${args[i]}`, inline: true },
                );
            }
            message.reply({embeds: [embed]});
        }
    }
}