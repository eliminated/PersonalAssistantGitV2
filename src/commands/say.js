module.exports = {
    name: 'say',
    description: 'Make the bot say something.',
    usage: '-!say <message>',
    async execute(client, message, args, Discord) {
        if(!args[0]) return message.channel.send('Please provide a message.');
        let msg = args.join(' ');
        message.delete();
        message.channel.send(msg);
    }
}