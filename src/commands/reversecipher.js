module.exports = {
    name: 'reversecipher',
    description: 'Encrypts and decrypts messages.',
    category: 'fun',
    args: true,
    usage: '-!reversecipher <encrypt/decrypt> <message>',
    aliases: ['rc', 'reverse', 'rcipher'],
    async execute(client, message, args, Discord) {
        if(!args[0]) {
            message.channel.send(`Please provide an action.`);
            return;
        } else if(!args[1]) {
            message.channel.send(`Please provide a message.`);
            return;
        } else {
            if(args[0] === 'encrypt') {
                let cipher = args.slice(1).join(' ');
                let cipher_text = cipher.split('').reverse().join('');
                let embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('__**REVERSE CIPHER**__')
                    .setDescription(`**${cipher}** has been encrypted to **${cipher_text}**.`)
                    .setTimestamp()
                    .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
                message.reply({embeds: [embed]});
            } else if(args[0] === 'decrypt') {
                let cipher = args.slice(1).join(' ');
                let cipher_text = cipher.split('').reverse().join('');
                let embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('__**REVERSE CIPHER**__')
                    .setDescription(`**${cipher_text}** has been decrypted to **${cipher}**.`)
                    .setTimestamp()
                    .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());
                message.reply({embeds: [embed]});
            } else {
                message.channel.send(`Please provide a valid action.`);
                return;
            }
        }
    }
}