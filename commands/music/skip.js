module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    //saltado de canciones
    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal de voz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - La cancion se ah saltado!`);
    },
};