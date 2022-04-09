const { SlashCommandBuilder } = require("@discordjs/builders");
const simplydjs = require('simply-djs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("calc")
    .setDescription("Calculator! / 계산기!"),
  async execute(interaction) {
    await interaction.deferReply()
    simplydjs.calculator(interaction, {
      embedColor: "ffffff"
    });
  },
};
