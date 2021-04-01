module.exports = {
  name: "help",
  description: "this is a help command!",
  execute(message, args) {
    //Code here...
    message.channel.send("HELP\n-hello\n-help\n-ping\n-youtube");
  },
};
