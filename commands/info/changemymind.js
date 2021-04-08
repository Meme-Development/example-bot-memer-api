const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "changemymind",
  description: "changemymind",
  usage: "changemymind",
  category: "Image",
  run: async (bot, message, args) => {
    if (!args.length) {
      return message.channel.send("Please give the a msg");
    }

    let text = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    let image = await memer.changemymind(text);
    let attachment = new Discord.MessageAttachment(image, "changemymind.png");
    message.channel.send(attachment);
  }
};
