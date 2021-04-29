module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Ya esta en pausa !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - cancion ${client.player.getQueue(message).playing.title} pausada !`);
    },
};