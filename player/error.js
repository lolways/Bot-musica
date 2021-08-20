module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'Noreproduciendo':
            message.channel.send(`${client.emotes.error} - No hay musica reproduciendose en este canal !`);
            break;

        case 'NoConectado':
            message.channel.send(`${client.emotes.error} - No estas conectado a ningun canal !`);
            break;

        case 'NoSePudoConectar':
            message.channel.send(`${client.emotes.error} - No me pude conectar, revise mis permisos !`);
            break;

        case 'VideoNoDisponible':
            message.channel.send(`${client.emotes.error} - ${args[0].title} No esta disponeble en tu pais! Saltando...`);
            break;

        case 'MusicaEmpezando':
            message.channel.send(`Musica empezando - reintente`);
            break;

        default:
            message.channel.send(`${client.emotes.error} - Algo paso ... Error : ${error}`);
    };
};
