module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Se paro la musica, no hay nadie en el canal de voz !`);
};