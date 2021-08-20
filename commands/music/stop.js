module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',


    //parar musica
    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal de voz !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No hay musica reproduciendose !`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} - La musica ah parado !`);
    },
};