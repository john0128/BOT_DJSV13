const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies With Pong! / 핑을 보여주고 퐁으로 대답합니다"),
  async execute(interaction) {
    //await interaction.reply(`:ping_pong:  Pong! ${}ms`)
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`:ping_pong: Pong! ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};
