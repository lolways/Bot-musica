module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - La seleccion ah sido cancelada  !`);
    } else message.channel.send(`${client.emotes.error} - You must send a valid number between **1** and **${tracks.length}** !`);
};