module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} se añadio a la lista de reproduccion (**${playlist.tracks.length}** songs) !`);
};