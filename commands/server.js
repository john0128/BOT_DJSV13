const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Show Server Information / 서버 정보를 보여줍니다"),
  async execute(interaction) {
    // const embedinfo = new MessageEmbed()
    // .setTitle(`Server Info / 서버 정보`)
    // .setDescription(`Information of Discord Server / 이 서버에 대한 정보를 보여줍니다`)
    // .addField(`Test`)
    // .setColor('#000000')

    //let servericon = interaction.iconURL
    //let servericon = client.guild.get.iconURL();
    const embed = new MessageEmbed()
			.setColor(0x00D166)
			.setTitle(`Server Info / 서버 정보`)
			.setURL(``)
      .setDescription(``)
      .setImage(interaction.guild.iconURL)
      //.setAuthor(interaction.guild.name, interaction.guild.iconURL)
			.addFields({name:`Guild Name / 서버 이름`,value:`${interaction.guild.name}`},
      {name:"Total Members / 총 유저 수", value:`${interaction.guild.memberCount}`})
      interaction.reply({ embeds: [embed]});
  },
};
