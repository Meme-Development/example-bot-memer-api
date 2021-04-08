const Meme = require("memer-api");
const memer = new Meme();
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "tweet",
  description: "Send A Fake Tweet Message!",
  usage: "tweet <msg>",
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
    let username = String(user.user.username);

    let av = user.user.displayAvatarURL({ format: "png" });
    let image = await memer.tweet(av, username, text);
    let attachment = new Discord.MessageAttachment(image, "tweet.png");
    message.channel.send(attachment);
  }
};
