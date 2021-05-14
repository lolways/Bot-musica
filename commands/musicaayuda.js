module.exports = function (msg){
    
    if(msg.content === "ayuda") {
        msg.channel.send(":musical_note: comandos de radio:musical_note:")
        msg.channel.send("-play <name/URL>, reproducir música en un canal de voz.")
        msg.channel.send("-search <name>, abra un panel para elegir una música y luego reprodúzcala.")
        msg.channel.send("-pause, pausa la música actual.")
        msg.channel.send("-resume, vuelve a poner la música actual.")
        msg.channel.send("-queue, ver las siguientes canciones.")
        msg.channel.send("-clear-queue, eliminar música en la cola.")
        msg.channel.send("-shuffle, mezclar la cola.")
        msg.channel.send("-shuffle, mezclar la cola.")
        msg.channel.send("-nowplaying, vea la música en curso.")
        msg.channel.send("-loop, -para habilitar o deshabilitar la función de repetición.")
        msg.channel.send("-volume <1 - 100>, cambie el volumen.")
        msg.channel.send("-skip, saltar a la siguiente música.")
        msg.channel.send("-stop, detener toda la música.")
        msg.channel.send("-filter <filter>, agregar / quitar filtro.")
        msg.channel.send("-w-filters, ver filtros.")
    
    };
    
}    