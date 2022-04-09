const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Guild } = require('discord.js');
const { clientId, guildIds, token } = require('./config.json');
const fs = require('fs')

const commands = [
	// new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	// new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	// new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    // new SlashCommandBuilder().setName('와').setDescription('우 라고 대답합니다'),
];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    guildIds.map(async (guildId) => {
        try{
        await rest.put(Routes.applicationGuildCommands(clientId,guildId), {
            body: {commands},
        })
        console.log(` 서버 성공`)
    }
    catch(error){
        console.log(error)
    }
    })

    try{
        await rest.put(Routes.applicationCommands(clientId), {
            body: commands,
        })
        console.log('Global Deploy Successful!`')
    }
    catch(error){
        console.log(error)
    }

}) ();

// rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);