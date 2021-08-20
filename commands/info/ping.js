module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    //mensaje de ping
    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
    },
};