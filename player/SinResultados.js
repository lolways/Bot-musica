module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - No se encontraron resultados ${query} !`);
};