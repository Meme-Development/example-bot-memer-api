const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "satan",
  description: "satan!",
  usage: "satan",
  category: "Image",
  run: async (bot, message, args) => {
    let user = message.member;
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.satan(av);
    let attachment = new Discord.MessageAttachment(image, "satan.png");
    message.channel.send(attachment);
  }
};
