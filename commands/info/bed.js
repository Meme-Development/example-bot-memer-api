const Discord = require("discord.js");
const Meme = require("memer-api");
const memer = new Meme();

module.exports = {
  name: "bed",
  description: "bed!",
  category: "Image",
  usage: "bed @user",
  run: async (client, message, args) => {
    const av1 = message.author.avatarURL({
      format: "png",
      size: 512
    });
    let user1 = await message.mentions.members.first();
    if(!user1) {
      message.channel.send("PLEASE MENTION A USER")
    }
    let av2 = user1.user.displayAvatarURL({ format: "png" });

    const image = await memer.bed(av1, av2);
    let attachment = new Discord.MessageAttachment(image, "bed.png");
    message.channel.send(attachment);
  }
};
