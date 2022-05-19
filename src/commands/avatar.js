module.exports = {
    name: 'avatar',
    description: 'Shows the avatar of the mentioned user or yourself.',
    category: 'General',
    aliases: ['av', 'pfp'],
    usage: '-!avatar <user>',
    async execute(client, message, args, Discord) {
        // USAGE: !avatar <user> NOTE: If no user is mentioned, it will show your own avatar.
        if(!args[0]) {
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**AVATAR**__')
                .setImage(message.author.avatarURL())
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
        } else {
            let user = message.mentions.users.first();
            if(!user) {
                message.channel.send('Please provide a valid user.');
                return;
            }
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`__**AVATAR: ${user.username}**__`)
                .setImage(user.avatarURL())
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
        }
    }
}