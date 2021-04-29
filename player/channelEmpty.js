module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musica detenida, no hay personas en la sala !`);
};