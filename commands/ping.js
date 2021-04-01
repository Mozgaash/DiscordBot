module.exports = {
  name: "ping",
  description: "this is a ping command!",
  execute(message, args) {
    //Code here...
    message.channel.send("pong!");
  },
};
