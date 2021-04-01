module.exports = {
  name: "embed",
  description: "Embed!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#008080")
      .setTitle("Rules")
      .setURL("https://www.youtube.com/codelyon")
      .setDescription("This is a embed for the server rules")
      .addFields(
        { name: "Rule 1", value: "Be nice!" },
        { name: "Rule 2", value: "Follow twitch" },
        { name: "Rule 3", value: "No memes" }
      )
      .setImage(
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg"
      )
      .setFooter("Make sure to check out the rules channel");

    message.channel.send(newEmbed);
  },
};
