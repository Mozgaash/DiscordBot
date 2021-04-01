module.exports = {
  name: "youtube",
  description: "sends the youtube link",
  execute(message, args) {
    let role = message.guild.roles.cache.find((r) => r.name === "Mod");

    //Comprobar permisos
    if (message.member.permissions.has("BAN_MEMBERS")) {
      message.channel.send("You have the permission to ban members");
    } else {
      message.channel.send("You DONT have the permission to ban members");
    }

    // //Si el usuario tiene el rol 'Mod' que hemos creado...
    if (message.member.roles.cache.some((r) => r.name === "Mod")) {
      message.channel.send("https://www.youtube.com/codelyon");
      //Eliminar rol
      //   message.member.roles.remove("826111442436620288");
    } else {
      message.channel.send(
        "No tienes permisos, dejame cambiarlo pa que puedas anda..."
      );
      //Añadir rol
      message.member.roles.add(role).catch(console.error);
    }
  },
};
