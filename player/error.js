module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - No hay musica reproduciendose en este canal !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - No estas conectado a ningun canal !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - No me puedo unir, revisen los permisos del canal !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} No disponible en tu pais...`);
            break;
        case 'MusicStarting':
            message.channel.send(`La musica esta empezando... espera y reintentalo!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo ocurrio ... Error : ${error}`);
    };
};
