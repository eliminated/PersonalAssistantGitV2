module.exports = {
    name: "warn",
    description: "Warns a user.",
    category: "moderation",
    args: true,
    help_displayed: false,
    usage: "-!warn [user] [reason]",
    permissions: "KICK_MEMBERS",
    aliases: ["w", "wrn"],
    async execute(client, message, args, Discord) {
        if(!message.member.permissions.has("KICK_MEMBERS")) {
            return message.reply("You do not have permission to use this command.");
        } else {
            let member = message.mentions.members.first();
            //NOTE: IF the reason is not specified, the reason will be "No reasons were provided for this user."
            let reason = args.slice(1).join(" ");
            if(!reason) {
                reason = "No reason was provided for this user.";
            }
            if(!member) {
                return message.reply("Please mention a valid member of this server.");
            }
            if(!member.kickable) {
                return message.reply("I cannot warn this user.");
            }
            let embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('__**WARNING**__')
                .addFields(
                    { name: '**Moderator:**', value: `${message.author.username}`},
                    { name: '**User:**', value: `${member.user.username}`},
                    { name: '**Reason:**', value: `${reason}`},
                )
                .setTimestamp()
                .setFooter({text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL()});
            
            let warn_channel = message.guild.channels.cache.find(channel => channel.name === "modlog");
            if(!warn_channel) {
                return message.reply("There is no `modlog` channel.");
            }
            warn_channel.send({embeds: [embed]});
        }
    }
}