
 
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { PREFIX } = require('../../json/config.json');
const moment = require('moment')
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.on('messageCreate', async (_0x3ba3cc) => {
      if (_0x3ba3cc.partial) {
        return
      }
      if (!_0x3ba3cc.guild || _0x3ba3cc.author.bot) {
        return
      }
      if (_0x3ba3cc.content.toLowerCase().startsWith(PREFIX + 'afk')) {
        return
      }
      const _0x2ff448 = db.get(
        'afk_' + _0x3ba3cc.author.id + '+' + _0x3ba3cc.guild.id
      )
      if (_0x2ff448) {
        const _0x4f7eb0 = db.get(
            'afk_' + _0x3ba3cc.author.id + '+' + _0x3ba3cc.guild.id
          ),
          [_0x17ef31, _0x1ffd51, _0x329d2b] = _0x4f7eb0
        _0x3ba3cc.member.setNickname('' + _0x329d2b).catch(() => {})
        await db.delete('afk_' + _0x3ba3cc.author.id + '+' + _0x3ba3cc.guild.id)
        _0x3ba3cc.channel
          .send(
            ':wave: <@' +
              _0x3ba3cc.author.id +
              ">: Welcome back, you're no longer **AFK**"
          )
          .then((_0x1f86f8) => {
            setTimeout(() => {
              _0x1f86f8.delete()
            }, 10000)
          })
      }
    })
    client.on('messageCreate', async (_0x3ab98a) => {
      if (_0x3ab98a.author.bot) {
        return
      }
      const _0x231685 = _0x3ab98a.mentions.members.first()
      if (!_0x231685) {
        return
      }
      if (_0x231685) {
        if (db.has('afk_' + _0x231685.id + '+' + _0x3ab98a.guild.id)) {
          const _0x5a970d = db.get(
              'afk_' + _0x231685.id + '+' + _0x3ab98a.guild.id
            ),
            [_0x36ffe5, _0x3d70dd, _0x180419] = _0x5a970d,
            _0x4a8dca = moment(_0x36ffe5).fromNow()
          _0x3ab98a.channel
            .send(
              ':zzz: `' +
                _0x231685.displayName +
                '` is AFK:  ' +
                _0x3d70dd +
                '  ' +
                _0x4a8dca +
                '  '
            )
            .catch(() => {})
        }
      }
    })
  },
}
