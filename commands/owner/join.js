const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: 'join',
         aliases: ['j'],
    execute(client, message, args) {
        
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            message: 'The audio ROM has been entered'
        }, message.channel.send(':dash: The audio ROM has been logged in :sparkles:')
        )
    }
}
