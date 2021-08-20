module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',


    //mensaje de pausa
    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal de voz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - La musica ya esta pausada !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Cancion ${client.player.getQueue(message).playing.title} pausada !`);
    },
};