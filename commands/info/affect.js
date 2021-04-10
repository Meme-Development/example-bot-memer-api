const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "affect",
  description: "affect!",
  usage: "affect",
  category: "Image",
  run: async (bot, message, args) => {
    let user = message.member;
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.affect(av);
    let attachment = new Discord.MessageAttachment(image, "affect.png");
    message.channel.send(attachment);
  }
};
