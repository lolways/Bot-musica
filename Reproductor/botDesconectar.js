module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La musica se detuvo y me voy del canal !`);
};