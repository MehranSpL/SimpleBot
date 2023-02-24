const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.once("ready", () => {
  console.log(`I'm Logged In With ${client.user.username}!`);
  client.user.setPresence({
    status: "online",
    activity: {
      name: "You!!!",
      type: "WATCHING",
    },
  });
});

let prefix = "#";

client.on('message', async (message) => {
  if (message.content.toLowerCase() === prefix + 'ping') {
    const embed = new Discord.MessageEmbed()
      .setTitle('🏓 Pong!')
      .setDescription(`My Ping Is ${Date.now() - message.createdTimestamp}ms`)
      .setColor('#fffff');
    message.channel.send(embed);
  };
});

client.login(config.token)