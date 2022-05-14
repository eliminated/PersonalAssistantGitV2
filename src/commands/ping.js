module.exports = {
    name: 'ping',
    description: 'Pong!',
    async execute(client, message, args, Discord) {
        const msg = await message.channel.send('Pinging...');
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit(`Pong! \`${ping}ms\``);
    }
}