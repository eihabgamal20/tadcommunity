//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { MessageEmbed } = require('discord.js');
const { GUILD } = require('../../json/config.json');

const {
  message_log,
  role_log,
  channel_log,
  voice_log,
  nickname_log,
  joinleave_log,
  member_role_log,
  emoji_log,
  channel_update_log,
  ban_unban_log
  
} = require('../../json/Log_system.json');



module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    let server_log_id = GUILD || null,
      messagelog = message_log || null,
      rolelog = role_log || null,
      channellog = channel_log || null,
      guildlog = ban_unban_log || null,
      voicelog = voice_log || null,
      nickname = nickname_log || null,
      joinleave = joinleave_log || null,
      member_role = member_role_log || null,
      emojilog = emoji_log || null,
      channel_update = channel_update_log || null
    const server = client.guilds.cache.get(server_log_id)
    if (!server) {
      return console.log('not conect server')
    }
    client.on('emojiCreate', async function (_0x463001) {
      if (_0x463001.guild.id !== server_log_id) {
        return
      }
      const _0x2232c1 = client.channels.cache.get(emojilog)
      let _0x5b9e78 = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('emoji created', _0x463001.guild.iconURL)
        .addField('emote name', _0x463001.name)
        .addField('emote', _0x463001 + '\n**----------------------**')
        .setTimestamp()
        .setAuthor(
          _0x463001.guild.name,
          _0x463001.guild.iconURL({ dynamic: true })
        )
      _0x2232c1.send({ embeds: [_0x5b9e78] })
    })
    client.on('emojiDelete', async function (_0x3ba1c7) {
      if (_0x3ba1c7.guild.id !== server_log_id) {
        return
      }
      const _0x3e234a = client.channels.cache.get(emojilog)
      let _0xdbbc8e = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('emoji deleted', _0x3ba1c7.guild.iconURL)
        .addField('emote name', _0x3ba1c7.name)
        .addField('emote url', _0x3ba1c7.url + '\n**----------------------**')
        .setTimestamp()
        .setAuthor(
          _0x3ba1c7.guild.name,
          _0x3ba1c7.guild.iconURL({ dynamic: true })
        )
      _0x3e234a.send({ embeds: [_0xdbbc8e] })
    })
    client.on('messageDelete', (_0x701a90) => {
      const _0x46004b = client.channels.cache.get(messagelog)
      if (_0x701a90.guild.id !== server_log_id) {
        return
      }
      if (!_0x46004b) {
        return
      }
      _0x701a90.guild.fetchAuditLogs().then((_0x54cd0a) => {
        let _0x5638eb = new MessageEmbed()
          .setAuthor(
            _0x701a90.guild.name,
            _0x701a90.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[MESSAGE DELETE \u274C]**')
          .setColor('RED')
          .setDescription(
            '**\n**:wastebasket: Successfully ``DELETE`` **MESSAGE** In ' +
              _0x701a90.channel +
              '\n\n**Channel:** ``' +
              _0x701a90.channel.name +
              '`` (ID: ' +
              _0x701a90.channel.id +
              ')\n**Message ID:** ' +
              _0x701a90.id +
              '\n**Sent By:** ' +
              _0x701a90.author.tag +
              ' (ID: ' +
              _0x701a90.author.id +
              ')\n**Message:**\n```' +
              _0x701a90 +
              '```\n        \n      '
          )
          .setTimestamp()
          .setFooter(
            _0x701a90.guild.name,
            _0x701a90.guild.iconURL({ dynamic: true })
          )
        _0x46004b.send({ embeds: [_0x5638eb] })
      })
    })
    client.on('messageUpdate', (_0x23624a, _0x53adfd) => {
      if (_0x23624a.author.bot) {
        return
      }
      const _0x289eb1 = client.channels.cache.get(messagelog)
      if (_0x23624a.guild.id !== server_log_id) {
        return
      }
      if (!_0x289eb1) {
        return
      }
      if (_0x23624a.content.startsWith('https://')) {
        return
      }
      let _0x5b6477 = new MessageEmbed()
        .setAuthor(
          _0x23624a.guild.name,
          _0x23624a.guild.iconURL({ dynamic: true })
        )
        .setTitle('**[MESSAGE EDIT \u267B]**')
        .setColor('BLUE')
        .setDescription(
          '**\n**:wrench: Successfully ``EDIT`` **MESSAGE** In ' +
            _0x23624a.channel +
            '\n\n**Channel:** ``' +
            _0x23624a.channel.name +
            '`` (ID: ' +
            _0x23624a.channel.id +
            ')\n**Message ID:** ' +
            _0x23624a.id +
            '\n**Sent By:** <@' +
            _0x23624a.author.id +
            '> (ID: ' +
            _0x23624a.author.id +
            ')\n\n**Old Message:**```' +
            _0x23624a +
            '```\n**New Message:**```' +
            _0x53adfd +
            '```\n     \n    '
        )
        .setTimestamp()
        .setFooter(
          _0x23624a.guild.name,
          _0x23624a.guild.iconURL({ dynamic: true })
        )
      _0x289eb1.send({ embeds: [_0x5b6477] })
    })
    client.on('roleCreate', (_0x135ec9) => {
      const _0x2e4334 = client.channels.cache.get(rolelog)
      if (!_0x2e4334) {
        return
      }
      if (_0x135ec9.guild.id !== server_log_id) {
        return
      }
      _0x135ec9.guild.fetchAuditLogs().then((_0x3741d8) => {
        let _0x41c7b8 = new MessageEmbed()
          .setAuthor(
            _0x135ec9.guild.name,
            _0x135ec9.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[ROLE CREATE \u2705]**')
          .setDescription(
            '**\n**:white_check_mark: Successfully ``CREATE`` Role.\n\n**Role Name:** ``' +
              _0x135ec9.name +
              '`` (ID: ' +
              _0x135ec9.id +
              ')'
          )
          .setColor('GREEN')
          .setTimestamp()
          .setFooter(
            _0x135ec9.guild.name,
            _0x135ec9.guild.iconURL({ dynamic: true })
          )
        _0x2e4334.send({ embeds: [_0x41c7b8] })
      })
    })
    client.on('roleDelete', (_0x7fec1c) => {
      const _0xab6482 = client.channels.cache.get(rolelog)
      if (!_0xab6482) {
        return
      }
      if (_0x7fec1c.guild.id !== server_log_id) {
        return
      }
      _0x7fec1c.guild.fetchAuditLogs().then((_0x40b2eb) => {
        let _0x2ca1f7 = new MessageEmbed()
          .setAuthor(
            _0x7fec1c.guild.name,
            _0x7fec1c.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[ROLE DELETE \u274C]**')
          .setDescription(
            '**\n**:white_check_mark: Successfully ``DELETE`` Role.\n\n**Role Name:** ``' +
              _0x7fec1c.name +
              '`` (ID: ' +
              _0x7fec1c.id +
              ')\n'
          )
          .setColor('RED')
          .setTimestamp()
          .setFooter(
            _0x7fec1c.guild.name,
            _0x7fec1c.guild.iconURL({ dynamic: true })
          )
        _0xab6482.send({ embeds: [_0x2ca1f7] })
      })
    })
    client.on('roleUpdate', (_0x1bdcc2, _0x598868) => {
      const _0x690dbb = client.channels.cache.get(rolelog)
      if (!_0x690dbb) {
        return
      }
      if (_0x1bdcc2.guild.id !== server_log_id) {
        return
      }
      _0x1bdcc2.guild.fetchAuditLogs().then((_0x3bf72f) => {
        if (_0x1bdcc2.name !== _0x598868.name) {
          let _0x5bed27 = new MessageEmbed()
            .setAuthor(
              _0x1bdcc2.guild.name,
              _0x1bdcc2.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[ROLE NAME UPDATE \u267B]**')
            .setColor('BLUE')
            .setDescription(
              '**\n**:white_check_mark: Successfully ``EDITED`` Role Name.\n\n**Old Name:** ``' +
                _0x1bdcc2.name +
                '``\n**New Name:** ``' +
                _0x598868.name +
                '``\n**Role ID:** ' +
                _0x1bdcc2.id +
                '\n'
            )
            .setTimestamp()
            .setFooter(
              _0x1bdcc2.guild.name,
              _0x1bdcc2.guild.iconURL({ dynamic: true })
            )
          _0x690dbb.send({ embeds: [_0x5bed27] })
        }
        if (_0x1bdcc2.hexColor !== _0x598868.hexColor) {
          if (_0x1bdcc2.hexColor === '#000000') {
            var _0x5e1af0 = '`Default`'
          } else {
            var _0x5e1af0 = _0x1bdcc2.hexColor
          }
          if (_0x598868.hexColor === '#000000') {
            var _0x55a063 = '`Default`'
          } else {
            var _0x55a063 = _0x598868.hexColor
          }
          let _0x552ebc = new MessageEmbed()
            .setAuthor(
              _0x1bdcc2.guild.name,
              _0x1bdcc2.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[ROLE COLOR UPDATE \u267B\uD83D\uDED1]**')
            .setColor('BLUE')
            .setDescription(
              '**\n**:white_check_mark: Successfully ``EDITED`` **' +
                _0x1bdcc2.name +
                '** Role Color.\n\n**Old Color:** ' +
                _0x5e1af0 +
                '\n**New Color:** ' +
                _0x55a063 +
                '\n**Role ID:** ' +
                _0x1bdcc2.id
            )
            .setTimestamp()
            .setFooter(
              _0x1bdcc2.guild.name,
              _0x1bdcc2.guild.iconURL({ dynamic: true })
            )
          _0x690dbb.send({ embeds: [_0x552ebc] })
        }
      })
    })
    client.on('channelCreate', (_0x91b217) => {
      const _0x20371d = client.channels.cache.get(channellog)
      if (!_0x20371d) {
        return
      }
      if (_0x91b217.guild.id !== server_log_id) {
        return
      }
      if (_0x91b217.type === 'GUILD_TEXT') {
        var _0x21dba1 = 'Text'
      } else {
        if (_0x91b217.type === 'GUILD_VOICE') {
          var _0x21dba1 = 'Voice'
        } else {
          if (_0x91b217.type === 'GUILD_CATEGORY') {
            var _0x21dba1 = 'Category'
          }
        }
      }
      _0x91b217.guild.fetchAuditLogs().then((_0xe9472e) => {
        let _0x33ba31 = new MessageEmbed()
          .setAuthor(
            _0x91b217.guild.name,
            _0x91b217.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[CHANNEL CREATE \u2705]**')
          .setDescription(
            '**\n**:white_check_mark: Successfully ``CREATE`` **' +
              _0x21dba1 +
              '** channel.\n\n**Channel Name:** ``' +
              _0x91b217.name +
              '`` (ID: ' +
              _0x91b217.id +
              ')'
          )
          .setColor('GREEN')
          .setTimestamp()
          .setFooter(
            _0x91b217.guild.name,
            _0x91b217.guild.iconURL({ dynamic: true })
          )
        _0x20371d.send({ embeds: [_0x33ba31] })
      })
    })
    client.on('channelDelete', (_0x1d115e) => {
      const _0x578b08 = client.channels.cache.get(channellog)
      if (!_0x578b08) {
        return
      }
      if (_0x1d115e.guild.id !== server_log_id) {
        return
      }
      if (_0x1d115e.type === 'GUILD_TEXT') {
        var _0xd79246 = 'Text'
      } else {
        if (_0x1d115e.type === 'GUILD_VOICE') {
          var _0xd79246 = 'Voice'
        } else {
          if (_0x1d115e.type === 'GUILD_CATEGORY') {
            var _0xd79246 = 'Category'
          }
        }
      }
      _0x1d115e.guild.fetchAuditLogs().then((_0x555f6f) => {
        let _0x4ba86d = new MessageEmbed()
          .setAuthor(
            _0x1d115e.guild.name,
            _0x1d115e.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[CHANNEL DELETE \u274C]**')
          .setDescription(
            '**\n**:white_check_mark: Successfully ``DELETE`` **' +
              _0xd79246 +
              '** channel.\n\n**Channel Name:** ``' +
              _0x1d115e.name +
              '`` (ID: ' +
              _0x1d115e.id +
              ')'
          )
          .setColor('RED')
          .setTimestamp()
          .setFooter(
            _0x1d115e.guild.name,
            _0x1d115e.guild.iconURL({ dynamic: true })
          )
        _0x578b08.send({ embeds: [_0x4ba86d] })
      })
    })
    client.on('channelUpdate', (_0x30c5e0, _0x10f228) => {
      const _0x2cdba2 = client.channels.cache.get(channel_update)
      if (!_0x2cdba2) {
        return
      }
      if (_0x30c5e0.guild.id !== server_log_id) {
        return
      }
      if (_0x30c5e0.type === 'GUILD_TEXT') {
        var _0x365ddb = 'Text'
      } else {
        if (_0x30c5e0.type === 'GUILD_VOICE') {
          var _0x365ddb = 'Voice'
        } else {
          if (_0x30c5e0.type === 'GUILD_CATEGORY') {
            var _0x365ddb = 'Category'
          }
        }
      }
      _0x30c5e0.guild.fetchAuditLogs().then((_0x2cfe0c) => {
        if (_0x30c5e0.name !== _0x10f228.name) {
          let _0x1e2890 = new MessageEmbed()
            .setAuthor(
              _0x30c5e0.guild.name,
              _0x30c5e0.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[CHANNEL EDIT \u267B]**')
            .setColor('BLUE')
            .setDescription(
              '**\n**:wrench: Successfully Edited **' +
                _0x365ddb +
                '** Channel Name\n\n**Old Name:** ``' +
                _0x30c5e0.name +
                '``\n**New Name:** ``' +
                _0x10f228.name +
                '``\n**Channel ID:** ' +
                _0x30c5e0.id
            )
            .setTimestamp()
            .setFooter(
              _0x30c5e0.guild.name,
              _0x30c5e0.guild.iconURL({ dynamic: true })
            )
          _0x2cdba2.send({ embeds: [_0x1e2890] })
        }
        if (_0x30c5e0.topic !== _0x10f228.topic) {
          let _0x4196d3 = new MessageEmbed()
            .setAuthor(
              _0x30c5e0.guild.name,
              _0x30c5e0.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[CHANNEL EDIT \u267B]**')
            .setColor('BLUE')
            .setDescription(
              '**\n**:wrench: Successfully Edited **' +
                _0x365ddb +
                '** Channel Topic\n\n**Old Topic:**\n```' +
                (_0x30c5e0.topic || 'NULL') +
                '```\n**New Topic:**\n```' +
                (_0x10f228.topic || 'NULL') +
                '```\n**Channel:** ' +
                _0x30c5e0 +
                ' (ID: ' +
                _0x30c5e0.id +
                ')'
            )
            .setTimestamp()
            .setFooter(
              _0x30c5e0.guild.name,
              _0x30c5e0.guild.iconURL({ dynamic: true })
            )
          _0x2cdba2.send({ embeds: [_0x4196d3] })
        }
      })
    })
    client.on('guildBanAdd', (_0x2f5ad3, _0x8e7ca3) => {
      const _0x55e748 = client.channels.cache.get(guildlog)
      if (!_0x55e748) {
        return
      }
      if (_0x2f5ad3.guild.id !== server_log_id) {
        return
      }
      _0x2f5ad3.guild.fetchAuditLogs().then((_0x29e99e) => {
        let _0x22d39f = new MessageEmbed()
          .setAuthor(
            _0x2f5ad3.guild.name,
            _0x2f5ad3.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            _0x2f5ad3.guild.name,
            _0x2f5ad3.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[BANNED \u26D4\uD83D\uDD34]**')
          .setColor('DARK_RED')
          .setDescription(
            '**\n**:airplane: Successfully ``BANNED`` **' +
              _0x2f5ad3.user.tag +
              '** From the server!\n\n**User:** <@' +
              _0x2f5ad3.user.id +
              '> (ID: ' +
              _0x2f5ad3.user.id +
              ')'
          )
          .setTimestamp()
        _0x55e748.send({ embeds: [_0x22d39f] })
      })
    })
    client.on('guildBanRemove', (_0x457d47, _0x5e1fe2) => {
      const _0x2d07b6 = client.channels.cache.get(guildlog)
      if (!_0x2d07b6) {
        return
      }
      if (_0x457d47.guild.id !== server_log_id) {
        return
      }
      _0x457d47.guild.fetchAuditLogs().then((_0x41a26e) => {
        let _0x55c556 = new MessageEmbed()
          .setAuthor(
            _0x457d47.guild.name,
            _0x457d47.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            _0x457d47.guild.name,
            _0x457d47.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[UNBANNED \u2705\uD83D\uDFE2]**')
          .setColor('GREEN')
          .setDescription(
            '**\n**:unlock: Successfully ``UNBANNED`` **' +
              _0x457d47.user.tag +
              '** From the server\n\n**User:** <@' +
              _0x457d47.user.id +
              '> (ID: ' +
              _0x457d47.user.id +
              ')'
          )
          .setTimestamp()
        _0x2d07b6.send({ embeds: [_0x55c556] })
      })
    })
    client.on('guildMemberUpdate', (_0x56dc53, _0x488864) => {
      const _0x4e389b = client.channels.cache.get(nickname)
      if (!_0x4e389b) {
        return
      }
      if (_0x56dc53.guild.id !== server_log_id) {
        return
      }
      _0x56dc53.guild.fetchAuditLogs().then((_0xefe72f) => {
        if (_0x56dc53.nickname !== _0x488864.nickname) {
          if (_0x56dc53.nickname === null) {
            var _0x2895db = '`default name`'
          } else {
            var _0x2895db = _0x56dc53.nickname
          }
          if (_0x488864.nickname === null) {
            var _0x26cd97 = '`default name`'
          } else {
            var _0x26cd97 = _0x488864.nickname
          }
          let _0x39bb06 = new MessageEmbed()
            .setAuthor(
              _0x56dc53.guild.name,
              _0x56dc53.guild.iconURL({ dynamic: true })
            )
            .setFooter(
              _0x56dc53.guild.name,
              _0x56dc53.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[UPDATE MEMBER NICKNAME \uD83C\uDFAD\u2705]**')
            .setColor('BLUE')
            .setDescription(
              '**\n**:spy: Successfully ``CHANGE`` Member Nickname.\n\n**User:** ' +
                _0x56dc53 +
                ' (ID: ' +
                _0x56dc53.id +
                ')\n**Old Nickname:** ' +
                _0x2895db +
                '\n**New Nickname:** ' +
                _0x26cd97
            )
            .setTimestamp()
          _0x4e389b.send({ embeds: [_0x39bb06] })
        }
      })
    })
    client.on('voiceStateUpdate', (_0x5d8355, _0x328d37) => {
      const _0x59eb4e = client.channels.cache.get(voicelog)
      if (!_0x59eb4e) {
        return
      }
      if (_0x5d8355.guild.id !== server_log_id) {
        return
      }
      _0x5d8355.guild.fetchAuditLogs().then((_0x4c0ff2) => {
        if (_0x5d8355.serverMute === false && _0x328d37.serverMute === true) {
          let _0x4dd581 = new MessageEmbed()
            .setAuthor(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setFooter(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[VOICE MUTE \uD83D\uDD08]**')
            .setColor('RED')
            .setDescription(
              '**User:** <@' + _0x5d8355.id + '> (ID: ' + _0x5d8355.id + ')'
            )
            .setTimestamp()
          _0x59eb4e.send({ embeds: [_0x4dd581] })
        }
        if (_0x5d8355.serverMute === true && _0x328d37.serverMute === false) {
          let _0x2974da = new MessageEmbed()
            .setAuthor(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setFooter(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[VOICE UNMUTE \uD83D\uDD0A]**')
            .setColor('GREEN')
            .setDescription(
              '**User:** <@' + _0x5d8355.id + '> (ID: ' + _0x5d8355.id + ')'
            )
            .setTimestamp()
          _0x59eb4e.send({ embeds: [_0x2974da] })
        }
        if (_0x5d8355.serverDeaf === false && _0x328d37.serverDeaf === true) {
          let _0x292e62 = new MessageEmbed()
            .setAuthor(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setFooter(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[VOICE DEAF \uD83D\uDD08\u2666\u26D4]**')
            .setColor('RED')
            .setDescription(
              '**User:** <@' + _0x5d8355.id + '> (ID: ' + _0x5d8355.id + ')'
            )
            .setTimestamp()
          _0x59eb4e.send({ embeds: [_0x292e62] })
        }
        if (_0x5d8355.serverDeaf === true && _0x328d37.serverDeaf === false) {
          let _0x512a5e = new MessageEmbed()
            .setAuthor(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setFooter(
              _0x5d8355.guild.name,
              _0x5d8355.guild.iconURL({ dynamic: true })
            )
            .setTitle('**[VOICE UNDEAF \uD83D\uDD08\u2666\uD83D\uDFE2]**')
            .setThumbnail(
              'https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png'
            )
            .setColor('GREEN')
            .setDescription(
              '**User:** <@' + _0x5d8355.id + '> (ID: ' + _0x5d8355.id + ')'
            )
            .setTimestamp()
          _0x59eb4e.send({ embeds: [_0x512a5e] })
        }
      })
      if (
        _0x5d8355.voiceChannelID !== _0x328d37.voiceChannelID &&
        _0x328d37.voiceChannel &&
        _0x5d8355.voiceChannel != null
      ) {
        let _0x110481 = new MessageEmbed()
          .setAuthor(
            _0x5d8355.guild.name,
            _0x5d8355.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            _0x5d8355.guild.name,
            _0x5d8355.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[CHANGED VOICE ROOM \uD83D\uDD8D]**')
          .setColor('GREEN')
          .setThumbnail(_0x5d8355.user)
          .setDescription(
            '**\n**:repeat: Successfully ``CHANGED`` The Voice Channel.\n\n**From:** ``' +
              _0x5d8355.voiceChannel.name +
              '`` (ID: ' +
              _0x5d8355.voiceChannelID +
              ')\n**To:** ``' +
              _0x328d37.voiceChannel.name +
              '`` (ID: ' +
              _0x328d37.voiceChannelID +
              ')\n**User:** ' +
              _0x5d8355 +
              ' (ID: ' +
              _0x5d8355.id +
              ')'
          )
          .setTimestamp()
        _0x59eb4e.send({ embeds: [_0x110481] })
      }
    })
    client.on('guildMemberUpdate', function (_0x3992ec, _0x2ddb0c, _0x4b8c6e) {
      const _0x4bddbf = client.channels.cache.get(member_role)
      if (_0x3992ec.guild.id !== server_log_id) {
        return
      }
      _0x3992ec.guild.fetchAuditLogs().then((_0x30bc81) => {
        if (_0x3992ec.roles.cache.size < _0x2ddb0c.roles.cache.size) {
          let _0xd85a9f = _0x2ddb0c.roles.cache
              .filter((_0x4593c3) => !_0x3992ec.roles.cache.has(_0x4593c3.id))
              .first(),
            _0x2a8e48 = new MessageEmbed()
              .setAuthor(
                _0x3992ec.guild.name,
                _0x3992ec.guild.iconURL({ dynamic: true })
              )
              .setFooter(
                _0x3992ec.guild.name,
                _0x3992ec.guild.iconURL({ dynamic: true })
              )
              .setTitle('**[ \u270D️Update User(role Added) ]**')
              .setThumbnail(_0x3992ec.user.avatarURL({ dynamic: true }))
              .setColor('GREEN')
              .setDescription(
                ' ** Update : **  ' +
                  _0x3992ec.user.tag +
                  '\n**Mention :** <@' +
                  _0x3992ec.user.id +
                  '> \n\n \n> **Roles :**\n > ` ' +
                  _0xd85a9f.name +
                  '`\n > **role:** <@&' +
                  _0xd85a9f.id +
                  '> \n> ** role id : **' +
                  _0xd85a9f.id
              )
              .setTimestamp()
          _0x4bddbf.send({ embeds: [_0x2a8e48] })
        }
        if (_0x3992ec.roles.cache.size > _0x2ddb0c.roles.cache.size) {
          let _0x4c0033 = _0x3992ec.roles.cache
              .filter((_0x3776cf) => !_0x2ddb0c.roles.cache.has(_0x3776cf.id))
              .first(),
            _0x141729 = new MessageEmbed()
              .setAuthor(
                _0x3992ec.guild.name,
                _0x3992ec.guild.iconURL({ dynamic: true })
              )
              .setFooter(
                _0x3992ec.guild.name,
                _0x3992ec.guild.iconURL({ dynamic: true })
              )
              .setTitle('**[\u270D️ Update User(role Removed) ]**')
              .setThumbnail(_0x3992ec.user.avatarURL({ dynamic: true }))
              .setColor('RED')
              .setDescription(
                ' ** Update : ** ' +
                  _0x3992ec.user.tag +
                  '\n **Mention :**<@' +
                  _0x3992ec.user.id +
                  '> \n\n\n> **Roles :**\n > ` ' +
                  _0x4c0033.name +
                  '`\n > **role:** <@&' +
                  _0x4c0033.id +
                  '> \n> ** role id : **' +
                  _0x4c0033.id
              )
              .setTimestamp()
          _0x4bddbf.send({ embeds: [_0x141729] })
        }
      })
    })
    client.on('guildMemberAdd', async function (_0x14538d) {
      const _0x22f3f5 = client.channels.cache.get(joinleave)
      if (!_0x22f3f5) {
        return
      }
      if (_0x14538d.guild.id !== server_log_id) {
        return
      }
      let _0x6afb15 = new MessageEmbed()
        .setAuthor(
          _0x14538d.guild.name,
          _0x14538d.guild.iconURL({ dynamic: true })
        )
        .setFooter(
          _0x14538d.guild.name,
          _0x14538d.guild.iconURL({ dynamic: true })
        )
        .setThumbnail(_0x14538d.user.avatarURL({ dynamic: true }))
        .setTitle('**[\uD83C\uDFE0️ User Join \uD83D\uDFE2]**')
        .setColor('GREEN')
        .addField('user tag', '`' + _0x14538d.user.tag + '`')
        .addField(
          'user id',
          '`' + _0x14538d.user.id + '`' + '\n**----------------------**'
        )
        .addField(
          'Joined Discord',
          '<t:' + parseInt(_0x14538d.user.createdAt / 1000) + ':R>\n '
        )
        .setTimestamp()
      _0x22f3f5.send({ embeds: [_0x6afb15] })
    })
    client.on('guildMemberRemove', async function (_0x669d70) {
      const _0x3066e8 = client.channels.cache.get(joinleave)
      if (_0x669d70.guild.id !== server_log_id) {
        return
      }
      let _0x3c5986 = _0x669d70.roles.cache
          .filter((_0x4b52d0) => _0x4b52d0.id !== _0x669d70.guild.id)
          .map((_0x292618) => _0x292618.id)
          .join('\n'),
        _0x259406 = _0x669d70.roles.cache
          .filter((_0x796776) => _0x796776.id !== _0x669d70.guild.id)
          .map((_0x1c2d09) => _0x1c2d09.name)
          .join('\n'),
        _0x2b5c47 = new MessageEmbed()
          .setAuthor(
            _0x669d70.guild.name,
            _0x669d70.guild.iconURL({ dynamic: true })
          )
          .setFooter(
            _0x669d70.guild.name,
            _0x669d70.guild.iconURL({ dynamic: true })
          )
          .setTitle('**[\uD83C\uDFE0️ User Left  \uD83D\uDD34 ]**')
          .setColor('RED')
          .setThumbnail(_0x669d70.user.avatarURL({ dynamic: true }))
          .addField('user tag', '`' + _0x669d70.user.tag + '`')
          .addField(
            'user id',
            '`' + _0x669d70.user.id + '`' + '\n**----------------------**'
          )
          .setTimestamp()
          .setDescription(
            '**Roles  in member**\n\n **roles id in member**\n `' +
              _0x3c5986 +
              '`\n **Roles name in member**\n `' +
              _0x259406 +
              '`'
          )
      _0x3066e8.send({ embeds: [_0x2b5c47] })
    })
  },
}
