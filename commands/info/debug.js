module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    //debug
    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} Conectado en **${client.voice.connections.size}** canales !`);
    },
};