module.exports = {
    name: "help",
    description: "Displays help commands.",
    category: "General",
    args: true,
    usage: "-!help [command] (Not required)",
    aliases: ["h"],
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            const available_commands = [];
            const commands = client.commands.map(cmd => cmd.name);
            const categories = client.commands.map(cmd => cmd.category);
            
            // Some commands has specific 'help_displayed' property. If false, it will not be displayed in the help command.
            const commands_with_help_displayed = client.commands.filter(cmd => cmd.help_displayed === true);
            const commands_without_help_displayed = client.commands.filter(cmd => cmd.help_displayed === false);

            // Put all commands into an array
            for(let i = 0; i < commands.length; i++) {
                available_commands.push(commands[i]);
            }
            // Put all commands with help_displayed into an array
            for(let i = 0; i < commands_with_help_displayed.length; i++) {
                available_commands.push(commands_with_help_displayed[i].name);
            }
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**HELP COMMANDS**__')
                .setDescription('Get help on a specific command,\n or all commands, by using the `-!help` command.')
                .setTimestamp()
                .setFooter({text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL()});
            // Add fields to the embed
            for(let i = 0; i < available_commands.length; i++) {
                embed.addFields(
                    { name: `**${available_commands[i]}**`, value: `\`Description:\` ${client.commands.get(available_commands[i]).description}\n\`Usage:\` ${client.commands.get(available_commands[i]).usage}`, inline: true },
                );
            }
            message.reply({embeds: [embed]});
        } else {
            const command = args[0].toLowerCase();
            if(!client.commands.has(command)) {
                return message.reply(`The command \`${command}\` does not exist.`);
            }
            const cmd = client.commands.get(command);
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`__**${cmd.name}**__`)
                .setDescription(`\`Description:\` ${cmd.description}\n\`Usage:\` ${cmd.usage}\n\`Aliases:\` ${cmd.aliases}\n\`Category:\` ${cmd.category}`)
                .setTimestamp()
                .setFooter({text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL()});
            message.reply({embeds: [embed]});
        }
    }
}