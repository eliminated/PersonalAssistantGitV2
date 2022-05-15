module.exports = {
    name: 'help',
    description: 'Shows all commands',
    usage: '-!help',
    async execute(client, message, args, Discord) {
        // USAGE: '-!help <command>' NOTE: If no command is provided, it will show all available commands.
        if(!args[0]) {
            const available_commands = client.commands.map(command => command.name);    // To add fields to the embed, use the .addFields() method.
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**HELP**__')
                .setDescription('Get help on a specific command, or all commands, by using the `-!help` command.')
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
                for(let i = 0; i < available_commands.length; i++) {
                    embed.addFields(
                        { name: `**${available_commands[i]}**`, value: `${client.commands.get(available_commands[i]).description}`},
                    );
                }
            message.reply({embeds: [embed]});
        } else {
            let command = args[0];
            if(!client.commands.has(command)) {
                message.channel.send(`Command \`${command}\` not found.`);
                return;
            }
            let embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('__**HELP**__')
                .setDescription(`**Command**: ${command}`)
                .addField(`**Description**`, `${client.commands.get(command).description}`)
                .addField(`**Usage**`, `${client.commands.get(command).usage}`)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
            message.reply({embeds: [embed]});
        }
    }
}