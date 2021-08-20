module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',


    //reproduccion
    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - No estas en un canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - No estas en el mismo canal de voz !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indique el titulo de la cancion !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};