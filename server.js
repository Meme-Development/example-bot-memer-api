let prefix = "/";
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true //
});
const { MessageEmbed } = require("discord.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", async () => {
  console.log("I am Reday to Go");
  client.user.setActivity("/help | Made With Memer API");
});

client.on("message", async message => {
  if (message.mentions.has(client.user.id)) {
    message.channel.send(`${prefix} is my prefix for this server`);
  }
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.login(process.env.token);
