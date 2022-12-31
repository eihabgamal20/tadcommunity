//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { Client, Intents, Collection, MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');
const akinator = require("discord.js-akinator");
const { PREFIX } = require('../../json/config.json');

//role bt test
let owner = ["910188124653625412","910188124653625411"]


module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    client.on('messageCreate', async (_0x184253) => {
      if (_0x184253.content == PREFIX + 'ak') {
        if (!owner.includes(_0x184253.author.id)) {
          return _0x184253.reply({
            embeds: [
              new MessageEmbed()
                .setColor('RED')
                .setTitle(
                  ' :x: | You do not have permission to use this command'
                ),
            ],
          })
        }
        let _0x2664b1 = new MessageActionRow().addComponents(
            new MessageButton()
              .setLabel('Play')
              .setCustomId('ak_en')
              .setStyle('SUCCESS'),
            new MessageButton()
              .setLabel('العب')
              .setCustomId('ak_ar')
              .setStyle('PRIMARY')
          ),
          _0x417baf = new MessageEmbed()
            .addFields({
              name: 'What can you do now?',
              value:
                'Think about a real or fictional character.\nI will try to guess who it is ',
              inline: false,
            })
            .addFields({
              name: '\u200B',
              value: '\u200B',
            })
            .addFields({
              name: 'ماذا يمكنك أن تفعل الآن\u061F',
              value:
                'عليك التفكير بشخصية حقيقية او خيالية.\nانا ساحاول معرفة الشخصية التي فكرت بها ',
              inline: false,
            })
            .setImage(
              'https://ar.akinator.com/bundles/elokencesite/images/akinator.png?v94'
            )
            .setColor('2F3136')
            .setAuthor(
              'Akinator | المارد',
              client.user.displayAvatarURL({ dynamic: true })
            )
        _0x184253.channel.send({
          embeds: [_0x417baf],
          components: [_0x2664b1],
        })
        _0x184253.delete()
      }
    })
    true
    const gameType = 'character',
      embedColor = '#2F3136'
    client.on('interactionCreate', (_0x38dfa2) => {
      _0x38dfa2.isButton() &&
        _0x38dfa2.customId == 'ak_en' &&
          (_0x38dfa2.reply({
            content: '**Play now and have fun**',
            ephemeral: true,
          }),
          akinator(_0x38dfa2, {
            language: 'en',
            childMode: true,
            gameType: gameType,
            useButtons: true,
            embedColor: embedColor,
          }))
    })
    client.on('interactionCreate', (_0x2f6c15) => {
      _0x2f6c15.isButton() &&
        _0x2f6c15.customId == 'ak_ar' &&
          (_0x2f6c15.reply({
            content: '**العب الان و استمتع**',
            ephemeral: true,
          }),
          akinator(_0x2f6c15, {
            language: 'ar',
            childMode: true,
            gameType: gameType,
            useButtons: true,
            embedColor: embedColor,
          }))
    })
  },
}
