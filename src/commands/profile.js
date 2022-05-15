module.exports = {
    name: 'profile',
    description: 'Shows your profile or the profile of a mentioned user.',
    usage: '-!profile [user]',
    async execute(client, message, args, Discord) {
        // USAGE: !profile [user] NOTE: If no user is mentioned, it will show your own profile.
        if(!args[0]) {
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**PROFILE**__')
                .setThumbnail(message.author.avatarURL())
                .addFields(
                    { name: '**User Name**', value: `${message.author.username}`, inline: true },
                    { name: '**User ID**', value: `${message.author.id}`, inline: true },
                    { name: '**User Discriminator**', value: `${message.author.discriminator}`, inline: true },
                    { name: '**User Avatar URL**', value: `${message.author.avatarURL()}`, inline: true },
                    { name: '**User Created At**', value: `${message.author.createdAt}`, inline: true },
                    // User nickname. NOTE: This is only available if the user has set a nickname.
                    { name: '**User Nickname**', value: `${message.member.nickname ? message.member.nickname : 'None'}`, inline: true },
                )
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
                .setTitle('__**PROFILE**__')
                .setThumbnail(user.avatarURL())
                .addFields(
                    { name: '**User Name**', value: `${user.username}`, inline: true },
                    { name: '**User ID**', value: `${user.id}`, inline: true },
                    { name: '**User Discriminator**', value: `${user.discriminator}`, inline: true },
                    { name: '**User Avatar URL**', value: `${user.avatarURL()}`, inline: true },
                    { name: '**User Created At**', value: `${user.createdAt}`, inline: true },
                    { name: '**Nickname**', value: `${message.guild.members.cache.get(user.id).nickname ? message.guild.members.cache.get(user.id).nickname : 'None'}`, inline: true },
                )
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
        }
    }
}