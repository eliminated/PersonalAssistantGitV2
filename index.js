const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '-!';

const fs = require('fs');

client.commands = new Discord.Collection();

const CommandFolders = fs.readdirSync("./commands");
for (const folder of CommandFolders) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for(const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.on('ready', () => {
  console.log(`Logged as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {

  if(message.content.toLowerCase().includes('good bot'))
  
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'ping'){
    client.commands.get('ping').execute(msg, args);
  }
})
client.login(process.env.DISCORD_TOKEN);