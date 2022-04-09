const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("emote")
    .setDescription("이모트!"),
  async execute(interaction) {
    //await interaction.reply(`:ping_pong:  Pong! ${}ms`)
    // const mesg = await interaction.reply("??");
    // msg.React(':dove:')
    const message = await interaction.reply({ content: 'You can react with Unicode emojis!', fetchReply: true });
		message.react(':dove:');
  },
};
