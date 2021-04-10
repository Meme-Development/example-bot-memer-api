const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "floor",
  description: "floor",
  usage: "floor <text>",
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
    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.floor(text, av);
    let attachment = new Discord.MessageAttachment(image, "floor.png");
    message.channel.send(attachment);
  }
};
