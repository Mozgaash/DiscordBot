const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const prefix = "-";
const fs = require("fs");
const memberCounter = require("./counters/member-counter.js");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("prueba is online!");
  memberCounter(client);
});

//Cualquier usuario que entre en el servidor tendra el rol member
client.on("guildMemberAdd", (guildMember) => {
  let welcomeRole = guildMember.guild.roles.cache.find(
    (role) => role.name === "member"
  );
  guildMember.roles.add(welcomeRole);
  //Mensaje de bienvenida al entrar al servidor
  guildMember.guild.channels.cache
    .get("827199685709135932") //id del canal de texto
    .send(
      `Welcome <@${guildMember.user.id}> to our server. Make sure too check out the rules text channel.`
    );
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //Comandos
  switch (command) {
    case "hello":
      client.commands.get("hello").execute(message, args);
      break;
    case "help":
      client.commands.get("help").execute(message, args);
      break;
    case "ping":
      client.commands.get("ping").execute(message, args);
      break;
    case "youtube":
      client.commands.get("youtube").execute(message, args);
      break;
    case "embed":
      client.commands.get("embed").execute(message, args, Discord);
      break;
    case "clear":
      client.commands.get("clear").execute(message, args);
      break;
    case "kick":
      client.commands.get("kick").execute(message, args);
      break;
    case "ban":
      client.commands.get("ban").execute(message, args);
      break;
    case "mute":
      client.commands.get("mute").execute(message, args);
      break;
    case "unmute":
      client.commands.get("unmute").execute(message, args);
      break;
    case "reactionrole":
      client.commands
        .get("reactionrole")
        .execute(message, args, Discord, client);
      break;
  }
});

client.login("ODI2MTAyOTIxODIxMjkwNTI4.YGHmTA.YM0LMn9EQ9gCLFIAYNVQUf4yv4U");

//   if (command === "ping") {
//     // message.channel.send("pong!");
//     client.commands.get("ping").execute(message, args);
//   } else if (command == "youtube") {
//     client.commands.get("youtube").execute(message, args);
//   } else if (command == "hello") {
//     client.commands.get("hello").execute(message, args);
//   } else if (command == "help") {
//     client.commands.get("help").execute(message, args);
//   }
