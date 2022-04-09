const { SlashCommandBuilder } = require("@discordjs/builders");
const {MessageEmbed} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Show My Info / 자신의 정보를` 봅니다")
    //.addStringOption(option =>
     // option.setName('Target / 대상')
      //  .setDescription("Select The Target who you want to see info / 정보를 보고 싶은 대상을 선택하세요")),
  ,async execute(interaction) {
    let usr = interaction.user;
    let avatar = usr.displayAvatarURL({size: 1024, dynamic: true})

    const embed = new MessageEmbed()
    .setTitle(`${interaction.user.username}'s Information!`)
    .setDescription(``)
    .addFields({name:"Nickname & Tag",value:`${interaction.user.tag}`},
    {name:"",value:``})
    .setImage(/*interaction.AvatarURL({dymaic:true})*/avatar)
    //.setThumbnail(Target.displayAvatarURL({dymaic:true}))

    // await interaction.reply(
    //   `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    // );
    await interaction.reply({ embeds: [embed]});
  },
};
