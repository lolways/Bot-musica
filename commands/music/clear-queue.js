module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',


    //borrar lista
    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Solo hay una cancion en la lista.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - La lista se ah removido !`);
    },
};