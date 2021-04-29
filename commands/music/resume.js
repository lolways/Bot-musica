module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Ya se esta reproduciendo !`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - cancion ${client.player.getQueue(message).playing.title} resumida !`);
    },
};