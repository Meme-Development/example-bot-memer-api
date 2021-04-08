const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "violence",
  description: "violence",
  usage: "violence <msg>",
  category: "Image",
  run: async (bot, message, args) => {
    let user = message.member;

    let text = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    let image = await memer.violence(text);
    let attachment = new Discord.MessageAttachment(image, "violence.png");
    message.channel.send(attachment);
  }
};
