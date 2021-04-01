module.exports = {
  name: "hello",
  description: "this is a welcome command!",
  execute(message, args) {
    //Code here...
    message.channel.send("Welcome to our first customized Bot!");
  },
};
