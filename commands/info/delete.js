const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "delete",
  description: "delete!",
  usage: "delete",
  category: "Image",
  run: async (bot, message, args) => {
    let user = message.member;
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.delete(av);
    let attachment = new Discord.MessageAttachment(image, "delete.png");
    message.channel.send(attachment);
  }
};
