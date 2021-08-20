module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La musica paro, no hay mas canciones en la lista !`);
};