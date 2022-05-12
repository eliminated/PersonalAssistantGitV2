module.exports = {
  name: 'ping',
  description: 'pong',
  execute(msg, args){
    msg.channel.send('pong!');
  }
}