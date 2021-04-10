const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "whodidthis",
  description: "whodidthis",
  usage: "whodidthis",
  category: "Image",
  run: async (bot, message) => {

    let user = message.member;
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.whodidthis(av);
    let attachment = new Discord.MessageAttachment(image, "whodidthis.png");
    message.channel.send(attachment);
  }
};
