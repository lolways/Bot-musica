//preparar todas las dependencias 
const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

//configuracion de bot
client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

//preparar los comandos 
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Cargando comados ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

// llamar a los eventos y el reproductor 
const events = fs.readdirSync('./eventos').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./Reproductor').filter(file => file.endsWith('.js'));

//uso de eventos
for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./eventos/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

//uso de player 
for (const file of player) {
    console.log(`Cargando Eventos ${file}`);
    const event = require(`./Reproductor/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

//Token
client.login(client.config.discord.token);