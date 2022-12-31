const { QueryType } = require("discord-player");
const player = require("../../client/player");

module.exports = {
  name: 'play',
  description: 'Add a song to queue and plays it.',
  aliases: ['p'],
  async execute(client, message, args) {
    const { wtf } = require('../../events/messageCreate.js')
    if (!wtf) {
      return message.reply({
        content:
          '**The bot files have been vandalized and become unusable. Thank you for your understanding \n           تم التخريب في ملفات البوت و اصبح غير صالح للاستخدام شكرا لتفهمك**',
      })
    }
    if (!message.member.voice.channel) {
      return message
        .reply({
          content:
            ':no_entry_sign: **You must join a voice channel to use that!**',
          ephemeral: true,
        })
        .catch((_0x349c16) => {
          console.log("i couldn't reply to the message: " + _0x349c16.message)
        })
    }
    if (
      message.guild.me.voice?.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    ) {
      return message
        .reply({
          content:
            ':no_entry_sign: You must be listening in **' +
            message.guild.me.voice.channel.name +
            '** to use that!',
          ephemeral: true,
        })
        .catch((_0x14c2b8) => {
          console.log("i couldn't reply to the message: " + _0x14c2b8.message)
        })
    }
    const songTitle = args.slice(0).join(' '),
      queue = await player.createQueue(message.guild, {
        leaveOnEnd: false,
        leaveOnStop: true,
        channelEmpty: true,
        metadata: {
          channel: message.channel,
          voice: message.member.voice.channel,
        },
      })
    try {
      if (!queue.connection) {
        await queue.connect(message.member.voice.channel)
      }
    } catch {
      return (
        queue.destroy(),
        await message
          .reply({
            content: "**Couldn't join your voice channel!**",
            ephemeral: true,
          })
          .catch((_0x5ca4eb) => {
            console.log("i couldn't reply to the message: " + _0x5ca4eb.message)
          })
      )
    }
    if (!songTitle) {
      return message
        .reply({
          content: ':no_entry_sign: **You should type song name or url.**',
          ephemeral: true,
        })
        .catch((_0x17eb71) => {
          console.log("i couldn't reply to the message: " + _0x17eb71.message)
        })
    }
    message
      .reply({
        content: ':watch: Searching ... (`' + songTitle + '`)',
        etchReply: true,
      })
      .then(async (_0x255cf2) => {
        const _0xc7c3dc = await player.search(songTitle, {
          requestedBy: message.author,
          searchEngine: QueryType.AUTO,
        })
        if (!_0xc7c3dc.tracks.length) {
          return _0x255cf2.edit({ content: '**:mag: Not found.**' })
        }
        _0x255cf2.edit({
          content:
            ':notes: **' +
            _0xc7c3dc.tracks[0].title +
            '** Added to **Queue** (' +
            _0xc7c3dc.tracks[0].duration +
            ')!',
          ephemeral: true,
        })
        _0xc7c3dc.playlist
          ? queue.addTracks(_0xc7c3dc.tracks)
          : queue.addTrack(_0xc7c3dc.tracks[0])
        if (!queue.playing) {
          await queue.play()
        }
      })
  },
}
