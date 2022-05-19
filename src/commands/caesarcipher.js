
module.exports = {
  name: 'caesarcipher',
  description: 'Encrypts or decrypts a message using the Caesar Cipher.',
  category: 'Fun',
  aliases: ['caecar', 'capher', 'cs'],
  usage: '-!caesarcipher [encrypt/decrypt] [message] [key]',
  async execute(client, message, args, Discord) {
    // NOTE: Seperate every requirements with comma. Example, you want to convert multiple words, you need to seperate them from encrypt/decrypt and key because the computer will thought that word is a key.
    // Example: -!cs encrypt , How are you? , 1
    // Example: -!cs decrypt , Jvbmx? , 1
    function encrypt() {
      let t = this;
      t.caesar = function(str, key) {
        let output = '';
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
              code = 65 + ((code - 65 + key) % 26);
            }
            else if (code >= 97 && code <= 122) {
              code = 97 + ((code - 97 + key) % 26);
            }
            output += String.fromCharCode(code);
          }
          else {
            output += char;
          }
        }
        return output;
      }

    }
    function decrypt() {
      let t = this;
      t.caesar = function(str, key) {
        let output = '';
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
              code = 65 + ((code - 65 - key) % 26);
            }
            else if (code >= 97 && code <= 122) {
              code = 97 + ((code - 97 - key) % 26);
            }
            output += String.fromCharCode(code);
          }
          else {
            output += char;
          }
        }
        return output;
      }

    }
    if (!args[0]) {
      let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('__**USABILITY**__')
        .setDescription('ERROR: Please provide an action.')
        .setTimestamp()
        .setFooter({ text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL() });
      message.reply({ embeds: [embed] });
      return;
    } else if (!args[1]) {
      let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('__**USABILITY**__')
        .setDescription('ERROR: Please provide a message.')
        .setTimestamp()
        .setFooter({ text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL() });
      message.reply({ embeds: [embed] });
      return;
    } else if (!args[2]) {
      let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('__**USABILITY**__')
        .setDescription('ERROR: Please provide a key.')
        .setTimestamp()
        .setFooter({ text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL() });
      message.reply({ embeds: [embed] });
      return;
    } else {
      if (args[0].toLowerCase() == 'encrypt') {
        let en = new encrypt();
        let encrypted = en.caesar(args[1], args[2]);
        let embed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('__**CAESAR CIPHER**__')
          .setDescription('Encrypts a message using the Caesar Cipher.')
          .addFields(
            { name: 'Message', value: `${args[1]}`, inline: true },
            { name: 'Key', value: `${args[2]}`, inline: true },
            { name: 'Result', value: `${encrypted}`, inline: true },
          )
          .setTimestamp()
          .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.avatarURL() });
        message.reply({ embeds: [embed] });
      } else if (args[0].toLowerCase() == 'decrypt') {
        let de = new decrypt();
        let decrypted = de.caesar(args[1], args[2]);
        let embed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('__**CAESAR CIPHER**__')
          .setDescription('Decrypts a message using the Caesar Cipher.')
          .addFields(
            { name: 'Message', value: `${args[1]}`, inline: true },
            { name: 'Key', value: `${args[2]}`, inline: true },
            { name: 'Result', value: `${decrypted}`, inline: true },
          )
          .setTimestamp()
          .setFooter({ text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL() });
        message.reply({ embeds: [embed] });
      } else {
        let embed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setTitle('__**USABILITY**__')
          .setDescription('ERROR: Please provide an action.')
          .setTimestamp()
          .setFooter({ text: `Requested by ${message.author.username}`, icon_url: message.author.avatarURL() });
        message.reply({ embeds: [embed] });
        return;
      }
    }
  }
}