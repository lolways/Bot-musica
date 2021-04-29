module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musica detenida, dejando la sala !`);
};