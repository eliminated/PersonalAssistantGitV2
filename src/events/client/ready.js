module.exports = (client) => {
    console.log(`${client.user.username} is ready to serve!`);
    client.user.setActivity('-!help', { type: 'PLAYING' });
};