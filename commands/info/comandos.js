module.exports = {

    name: 'comandos',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}comandos',

    //debug
    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} 🎵Music commands🎵
        -play <name/URL>, -reproducir música en un canal de voz.\n
        -search <name>, -abra un panel para elegir una música y luego reprodúzcala.\n
        -pause, -pausa la música actual.\n
        -resume, -vuelve a poner la música actual.\n
        -queue, -ver las siguientes canciones.\n
        -clear-queue, eliminar música en la cola.\n
        -shuffle, -mezclar la cola.\n
        -nowplaying, -vea la música en curso.\n
        -loop, -para habilitar o deshabilitar la función de repetición.\n
        -volume <1 - 100>, -cambie el volumen.\n
        -skip, -saltar a la siguiente música.\n
        -stop, -detener toda la música.\n
        -filter <filter>, -agregar / quitar filtro.\n
        -w-filters, -ver filtros.\n`);
    },
    

}