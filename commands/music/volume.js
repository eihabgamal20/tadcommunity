const player = require("../../client/player");

module.exports = {
    name: "volume",
    description: "Changes/Shows the current volume.",
    aliases: ['vol'],
         async execute(client, message, args) {
                if (!message.member.voice.channel)
            return message.reply({  content: ":no_entry_sign: **You must join a voice channel to use that!**"  }).catch((err) => {
          console.log(`i couldn't reply to the message: ` + err.message)
    })
        if (message.guild.me.voice?.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
            return message.reply({  content: `:no_entry_sign: You must be listening in **${message.guild.me.voice.channel.name}** to use that!`  }).catch((err) => {console.log(`i couldn't reply to the message: ` + err.message)
    })
        const volumePercentage = args[0]
        const queue = player.getQueue(message.guild.id);
        if (!queue?.playing)
            return message.reply({  content: ":no_entry_sign: **There must be music playing to use that!**"  }).catch((err) => {
            console.log(`i couldn't reply to the message: ` + err.message)
    })

        if (!volumePercentage)
            return message.reply({  content: `:loud_sound: **Volume: \`${queue.volume}\`**`});

        if (volumePercentage < 0 || volumePercentage > 150 || isNaN(volumePercentage))  
            return message.reply({  content: ":no_entry_sign: **Volume must be a valid integer between 0 and 150!**"  }).catch((err) => {console.log(`i couldn't reply to the message: ` + err.message)
    })
           
           
        message.reply({  content: `:loud_sound: **Volume changed from \`${queue.volume}\` to \`${volumePercentage}\`**`  }).catch((err) => {
          console.log(`i couldn't reply to the message: ` + err.message)
       })
        queue.setVolume(volumePercentage);
    },
};
