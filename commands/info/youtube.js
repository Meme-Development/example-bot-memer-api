const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "youtube",
  description: "Set a fake youtube comment!",
  usage: "youtube <msg>",
  category: "Image",
  run: async (bot, message, args) => {
    if (!args.length) {
      return message.channel.send("Please give the a msg");
    }

    let text = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    let user = message.member;
    let username = String(user.user.username);

    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.youtube(av, username, text);
    let attachment = new Discord.MessageAttachment(image, "youtube.png");
    message.channel.send(attachment);
  }
};
