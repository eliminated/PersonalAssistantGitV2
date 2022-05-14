const fs = require('fs');

module.exports = (client, Discord) => {
    const command_files = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));

    // Gets all the commands in the commands folder within another folder. Example: src/commands/general/ping.js
    for (const file of command_files) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
};