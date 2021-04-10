const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "dab",
  description: "dab!",
  usage: "dab",
  category: "Image",
  run: async (bot, message, args) => {
    let user = message.member;
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.dab(av);
    let attachment = new Discord.MessageAttachment(image, "dab.png");
    message.channel.send(attachment);
  }
};
