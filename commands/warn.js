const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('경고를 부여합니다!.')
        .addUserOption(option => option.setName('warn_user').setDescription('경고할 유저를 선택합니다.').setRequired(true))
        .addStringOption(option => option.setName('warn_reason').setDescription('경고 이유를 적습니다.').setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('warn_user');
        const reason = interaction.options.getString('warn_reason');
        const warn_embed = new MessageEmbed()
            .setColor('#ff0015')
            .setTitle('경고')
            .setDescription(`${user.username}`)
            .addFields(
                { name: '경고 이유', value: `${reason}` },
            );
        return interaction.reply({ embeds: [warn_embed], ephemeral: true });
    },
};