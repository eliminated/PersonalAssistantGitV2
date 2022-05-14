const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


const Discord = require('discord.js');
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
client.events = new Collection();

var handlers = ['command_handlers', 'event_handlers']
for (const handler of handlers) {
    require(`./src/handlers/${handler}`)(client, Discord);
}

client.login(process.env.DISCORD_TOKEN);