module.exports = async (client) => {
  const guild = client.guilds.cache.get("826103898267582516"); //id del servidor
  setInterval(() => {
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get("827210065051254785"); //id del canal de voz de Total de miembros
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log("Updating Member Count");
  }, 15000);
};
