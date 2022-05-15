module.exports = {
    name: 'percentage',
    description: 'Calculates the percentage of a number.',
    args: true,
    usage: '-!percentage <number> <out of>',
    aliases: ['percent', 'prc'],
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            message.channel.send(`You didn't provide a number.`);
            return;
        }
        if(!args[1]) {
            message.channel.send(`You didn't provide a number to divide by.`);
            return;
        }
        let num1 = parseInt(args[0]);
        let num2 = parseInt(args[1]);
        if(isNaN(num1)) {
            message.channel.send(`The first number provided is not a number.`);
            return;
        }
        if(isNaN(num2)) {
            message.channel.send(`The second number provided is not a number.`);
            return;
        }
        let percentage = Math.round((num1 / num2) * 100);
        let embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('__**PERCENTAGE**__')
            .addFields(
                { name: `**RESULT**`, value: `${percentage}%`, inline: true },
            )
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            // Show steps in one line in embde if there are more than 2 steps.
            for (let i = 2; i < args.length; i++) {
                embed.addFields(
                    { name: `**STEP ${i}**`, value: `${args[i]}`, inline: true },
                );
            }
    }
}