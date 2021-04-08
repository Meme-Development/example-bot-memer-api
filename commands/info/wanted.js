const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "wanted",
  description: "wanted!",
  usage: "wanted <msg>",
  category: "Image",
  run: async (bot, message, args) => {
    let user = message.member;
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.wanted(av);
    let attachment = new Discord.MessageAttachment(image, "wanted.png");
    message.channel.send(attachment);
  }
};
