const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("도움말을 보여줍니다. / Show Help Message and Commands"),
  async execute(interaction) {
    //await interaction.reply(`:ping_pong:  Pong! ${}ms`)
    const row = new MessageActionRow()
		.addComponents(
			new MessageSelectMenu()
			    .setCustomId('select')
				.setPlaceholder('Nothing selected')
				.addOptions([
					{
						label: 'Select me',
						description: 'This is a description',
						value: 'first_option',
					},
					{
						label: 'You can select me too',
						description: 'This is also a description',
						value: 'second_option',
					},
				]),
		);
		
        const rep = await interaction.reply({ content: '도움말!', components: [row] });
		if (interaction.customId === 'select') {
			await interaction.deferUpdate();
			await wait(4000);
			await interaction.editReply({ content: 'Something was selected!', components: [] });
  },
};
