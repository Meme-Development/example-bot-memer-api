const Discord = require("discord.js");
const Meme = require("memer-api");
const memer = new Meme();

module.exports = {
  name: "byemom",
  description: "Quick, mom is gone, what are you gonna search on google?",
  category: "Image",
  usage: "byemom <msg>",
  run: async (client, message, args) => {
    const user = message.member;
    if (!user) return message.channel.send("User not found.");
    const text = args.join(" ");

    if (!args.length) {
      return message.channel.send("Please give the a msg");
    }
    let username = String(user.user.username);
    let av = user.user.displayAvatarURL({ format: "png" });

    let image = await memer.byemom(av, username, text);
    let attachment = new Discord.MessageAttachment(image, "byemom.png");
    message.channel.send(attachment);
  }
};
