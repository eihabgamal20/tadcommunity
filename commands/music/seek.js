const { Message, Client } = require("discord.js");
const player = require("../../client/player");
const ms = require("ms");
const db = require('quick.db')

module.exports = {
  name: "seek",
  description: "Seeks to a certain point in the current track.",
  aliases: ['تقديم'],
  
  /**
   *
   * @param {Client} client
   * @param {Message<boolean> | null} message
   * @param {string[] | null} args
   */


         async execute(client, message, args) {

  
    let memberVoiceChannel = message.member.voice.channel;

    if (!memberVoiceChannel)
      return message.reply({  content: ":no_entry_sign: **You must join a voice channel to use that!**"  }).catch((err) => {
        console.log(`i couldn't reply to the message: ` + err.message)
    })

        if (message.guild.me.voice?.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
      return message.reply({  content: `:no_entry_sign: You must be listening in **${message.guild.me.voice.channel.name}** to use that!`}).catch((err) => {console.log(`i couldn't reply to the message: ` + err.message)
    })

            const queue = player.getQueue(message.guild.id);
        if (!queue?.playing)
            return message.reply({  content: ":no_entry_sign: **There must be music playing to use that!**"  }).catch((err) => {console.log(`i couldn't reply to the message: ` + err.message)
    })

    let position = args.join(" ");
    if (!position) return message.reply({
          content: `:rolling_eyes: - Example \`${client.config.prefix}seek **1m**\``}).catch((err) => {console.log(`i couldn't reply to the message: ` + err.message)
    })
    
     await queue.seek(ms(position));
    message.reply({ content: `:notes: **Seeked to ${position} seconds** `}).catch((err) => {console.log(`i couldn't reply to the message: ` + err.message)
    });
    
  },
};
