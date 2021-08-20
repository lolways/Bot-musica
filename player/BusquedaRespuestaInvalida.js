module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Esta selecion se cancelo !`);
    
    } else message.channel.send(`${client.emotes.error} - Ye tiene que mandar un numero entre **1** y **${tracks.length}** !`);
};