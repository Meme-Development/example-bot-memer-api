const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "airpods",
  description: "airpods!",
  usage: "airpods",
  category: "Image",
  run: async (bot, message, args) => {
    let user = message.member;
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.airpods(av);
    let attachment = new Discord.MessageAttachment(image, "airpodspng");
    message.channel.send(attachment);
  }
};
