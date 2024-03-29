
const {
  databasing,
  embedDatabasing,
  onCoolDown,
  escapeRegex
} = require(`${process.cwd()}/handlers/functions`);

const { PREFIX, GUILD, API_BOT_Developer_Tools, BOT_ID } = require('../json/config.json');
const { MessageActionRow, MessageEmbed, MessageButton, Collection } = require('discord.js');
const delay = new Collection();
const db = require('quick.db');
const ms = require('ms');
const axios = require("axios").default;
let wtf = GUILD



module.exports = {
name: 'messageCreate',
wtf,
async execute(client, message) {
  if (!message.content.startsWith(PREFIX) || message.author.bot) {
    return
  }
  const { data: api } = await axios
    .post('https://api.elbobhosting.ml/api/oa7a')
    .catch((_0x1340cc) => {})
  let blacklist = api?.blacklist.id,
    server_blacklist = api?.blacklist.server,
    linkinvit = api?.link_invit,
    bot_on = api?.bot_on,
    msg_bot_on = api?.msg_bot_on,
    bot_on_embed = new MessageEmbed()
      .setAuthor({
        name: '' + msg_bot_on?.embeds.Author.name,
        iconURL: msg_bot_on?.embeds.Author.iconURL + ' ',
        url: '' + linkinvit,
      })
      .setTitle('' + msg_bot_on?.embeds.Title)
      .setDescription('' + msg_bot_on?.embeds.Description)
      .setColor('2F3136')
      .setImage('' + msg_bot_on?.embeds.Image)
      .setFooter({
        text: 'ST6',
        iconURL:
          'https://media.discordapp.net/attachments/933257924535549952/1062897637101142036/16298BE9-94BC-4E29-A5A0-B2FB87120DBA.png?width=674&height=674',
      })
      .setTimestamp(),
    bot_on_btn = new MessageButton()
      .setLabel('ST6')
      .setURL('' + linkinvit)
      .setEmoji('1048117496135303168')
      .setStyle('LINK'),
    bot_on_row = new MessageActionRow().addComponents(bot_on_btn)
  if (bot_on !== 'on') {
    return message
      .reply({
        embeds: [bot_on_embed],
        components: [bot_on_row],
      })
      .catch((_0x11dbe0) => {
        console.log("i couldn't reply to the message: " + _0x11dbe0.message)
      })
  }
  let SERVER_BLACKLIST = new MessageEmbed()
  .setAuthor({
    name: '' + message.guild.name,
    iconURL: message.guild.iconURL({ dynamic: true }) + ' ',
    url: '' + linkinvit,
  })
  .setColor(message.guild.me.displayHexColor)
  .setTitle('This server is on the blacklist')
  .setDescription(
    '***' +
      message.guild.name +
      '*** **server has a blacklist from using the bot completely\n        يحتوي الخادم على قائمة سوداء تمنع استخدام البوت تمامًا**'
  )
  .setImage(
    'https://media.discordapp.net/attachments/965806495109369926/1040941415569571900/black_lest.jpg'
  )
  .setFooter({
    text: 'Thank you for using Bot ST6',
    iconURL:
      'https://media.discordapp.net/attachments/933257924535549952/1062897637101142036/16298BE9-94BC-4E29-A5A0-B2FB87120DBA.png?width=674&height=674',
  })
  .setTimestamp(),
server_btn1 = new MessageButton()
  .setLabel('ST6')
  .setURL('' + linkinvit)
  .setEmoji('1048117496135303168')
  .setStyle('LINK'),
server_row = new MessageActionRow().addComponents(server_btn1)
if (server_blacklist.includes(message.guild.id)) {
return message.reply({
  embeds: [SERVER_BLACKLIST],
  components: [server_row],
})
}
var First_use = await db.get('First_')
let fr_u = api?.msg_fr_u
if (First_use == fr_u) {
db.delete('First_')
}
if (First_use === 1000) {
db.delete('First_')
}
db.add('First_', 1)
First_use == null && db.set('bot_Activated', BOT_ID)
let bot_First = new MessageEmbed()
  .setAuthor({
    name: '' + message.guild.name,
    iconURL: message.guild.iconURL({ dynamic: true }) + ' ',
    url: '' + linkinvit,
  })
  .setDescription(
    'Hello, <@' +
      message.author.id +
      '>, I would like to tell you that you are now using the ST6 bot, which is version 3, and it was implemented through the ST6 server, and it was implemented to be used in your server in an excellent way, and in the event of any problem occurring to you, you can join us and raise the problem to our assistant team And you can join the server by clicking on the message button below \n      مرحبا يا <@' +
      message.author.id +
      '> اود ان اخبرك انك الان تستخدم بوت ادوات المطورين وهو الاصدار رقم 3  و تم تنفيزه من خلال سيرفر ادوات المطورين و وتم تنفيزه لاستخدامه في سيرفرك بشكل ممتاز و و في حاله حدوث اي مشكله لك يمكنك الانضمام لدينا و طرح المشلكة علي الفريق المساعد لدينا و يمكنك الانضمام للسيرفر من خلال الضغط علي الرسالة اسفل السيرفر'
  )
  .setColor('2F3136')
  .setFooter({
    text: 'Thank you for using Bot ST6',
    iconURL:
      'https://media.discordapp.net/attachments/933257924535549952/1062897637101142036/16298BE9-94BC-4E29-A5A0-B2FB87120DBA.png?width=674&height=674',
  })
  .setTimestamp(),
btn_First_use = new MessageButton()
  .setLabel('ST6 support')
  .setURL('' + linkinvit)
  .setEmoji('1048117496135303168')
  .setStyle('LINK'),
btn_First = new MessageActionRow().addComponents(btn_First_use)
if (First_use === 1) {
return message
  .reply({
    embeds: [bot_First],
    components: [btn_First],
  })
  .catch((_0x33955d) => {
    console.log("i couldn't reply to the message: " + _0x33955d.message)
  })
}
var bot1 = await db.get('bot_Activated')
if (bot1 !== client.user.id) {
let botid = new MessageEmbed()
    .setAuthor({
      name: '' + message.guild.name,
      iconURL: message.guild.iconURL({ dynamic: true }) + ' ',
      url: '' + linkinvit,
    })
    .setTitle(
      'Error recognizing the primary bot | خطا في التعرف علي البوت الاساسي للتشغيل'
    )
    .setDescription(
      'I would like to tell you that the bot will not be used again because the ID of the main bot has been changed and it has been sold to you or a copy of it has been taken. In the event that the bot is not running, you can contact Support by pressing the message button below \n        \n        **اود ان اخبرك انه لن يتم استخدام البوت  مرة اخرى لانه قد تم تغيراي دي البوت الاساسي و قد تم بيعه لك  او اخذ نسخة منه و في حاله عدم تشغيل البوت يمكنك التواصل مع سابورت من خلال الضغط علي الزر اسفل الرسالى**'
    )
    .setColor('2F3136')
    .setFooter({
      text: 'Thank you for using Bot ST6',
      iconURL:
        'https://media.discordapp.net/attachments/933257924535549952/1062897637101142036/16298BE9-94BC-4E29-A5A0-B2FB87120DBA.png?width=674&height=674',
    })
    .setTimestamp(),
  btnID = new MessageButton()
    .setLabel('ST6 support')
    .setURL('' + linkinvit)
    .setEmoji('1048117496135303168')
    .setStyle('LINK'),
  botrowID = new MessageActionRow().addComponents(btnID)
message
  .reply({
    embeds: [botid],
    components: [botrowID],
  })
  .catch((_0x117544) => {
    console.log("i couldn't reply to the message: " + _0x117544.message)
  })
return
}
let api_config = new MessageEmbed()
  .setAuthor({
    name: '' + message.guild.name,
    iconURL: message.guild.iconURL({ dynamic: true }) + ' ',
    url: '' + linkinvit,
  })
  .setTitle(
    'Please make sure there is a connection API from the config file and make sure it is typed correctly\n\nيرجى التأكد من وجود واجهة برمجة تطبيقات اتصال من config ملف وتاكد من كتابتها بشكل صحيح'
  )
  .setDescription(
    '**API_BOT_V3_Developer_Tools** >> https://localhost/eihabgamal:3080\n      ```js\n      "API_BOT_Developer_Tools":"https://localhost/eihabgamal:3080",\n      ```'
  )
  .setColor('2F3136')
  .setFooter({
    text: 'Thank you for using Bot ST6',
    iconURL:
      'https://media.discordapp.net/attachments/933257924535549952/1062897637101142036/16298BE9-94BC-4E29-A5A0-B2FB87120DBA.png?width=674&height=674',
  })
  .setTimestamp(),
btn_11 = new MessageButton()
  .setLabel('ST6 support')
  .setURL('' + linkinvit)
  .setEmoji('1048117496135303168')
  .setStyle('LINK'),
row = new MessageActionRow().addComponents(btn_11)
if (!API_BOT_Developer_Tools) {
return message
  .reply({
    embeds: [api_config],
    components: [row],
  })
  .catch((_0x6bd80c) => {
    console.log("i couldn't reply to the message: " + _0x6bd80c.message)
  })
}
if (API_BOT_Developer_Tools !== 'https://localhost/eihabgamal:3080') {
return message
  .reply({
    embeds: [api_config],
    components: [row],
  })
  .catch((_0x3449d6) => {
    console.log("i couldn't reply to the message: " + _0x3449d6.message)
  })
}
if (API_BOT_Developer_Tools == 'https://localhost/eihabgamal:3080') {
let NO_GUILD_ID = new MessageEmbed()
    .setAuthor({
      name: '' + message.guild.name,
      iconURL: message.guild.iconURL({ dynamic: true }) + ' ',
      url: '' + linkinvit,
    })
    .setTitle(
      'Please make sure to set your server ID to be read to run the bot or write it correctly\n      \n      من فضلك تأكد من وضع اي دي الخادم الخاص بك ليتم قراءة لتشغيل البوت او قم بكتابته بشكل صحيح'
    )
    .setDescription(
      'Example\n      ```js\n      "GUILD": "971426057334972526",\n      ```'
    )
    .setColor('2F3136')
    .setFooter({
      text: 'Thank you for using Bot ST6',
      iconURL:
        'https://media.discordapp.net/attachments/933257924535549952/1062897637101142036/16298BE9-94BC-4E29-A5A0-B2FB87120DBA.png?width=674&height=674',
    })
    .setTimestamp(),
  btn_NO_ID = new MessageButton()
    .setLabel('ST6 support')
    .setURL('' + linkinvit)
    .setEmoji('1048117496135303168')
    .setStyle('LINK'),
  rowNO_ID = new MessageActionRow().addComponents(btn_NO_ID)
if (!GUILD) {
  return message
    .reply({
      embeds: [NO_GUILD_ID],
      components: [rowNO_ID],
    })
    .catch((_0x195be2) => {
      console.log("i couldn't reply to the message: " + _0x195be2.message)
    })
}
if (message.guild.id !== GUILD) {
  return message
    .reply({
      embeds: [NO_GUILD_ID],
      components: [rowNO_ID],
    })
    .catch((_0x13cca5) => {
      console.log("i couldn't reply to the message: " + _0x13cca5.message)
    })
}
let BLACKLIST = new MessageEmbed()
    .setAuthor({
      name: '' + message.guild.name,
      iconURL: message.guild.iconURL({ dynamic: true }) + ' ',
      url: '' + linkinvit,
    })
    .setColor(message.guild.me.displayHexColor)
    .setTitle('You are on a blacklist from fully using the bot')
    .setDescription(
      '**You are one of the recipients of the BlackBerry that is not from using the bot in any way, and you will not be removed from it no matter what happens, or you can contact us by pressing the button and negotiating with the server management**\n      \n      ** انت احد الحاصلين علي بلاك ليست من استخدام البوت بأي شكل من الاشكال ولن يتم ازالتك منه مهما حصل او يمكنك التواصل معنا من خلال ضغط الزر و التفاوض مع ادارة السيرفر **\n      <@' +
        message.author.id +
        '> '
    )
    .setImage(
      'https://media.discordapp.net/attachments/965806495109369926/1040941415569571900/black_lest.jpg'
    )
    .setFooter({
      text: 'Thank you for using Bot ST6',
      iconURL:
        'https://media.discordapp.net/attachments/933257924535549952/1062897637101142036/16298BE9-94BC-4E29-A5A0-B2FB87120DBA.png?width=674&height=674',
    })
    .setTimestamp(),
  btn1 = new MessageButton()
    .setLabel('ST6')
    .setURL('' + linkinvit)
    .setEmoji('1048117496135303168')
    .setStyle('LINK'),
  row = new MessageActionRow().addComponents(btn1)
if (blacklist.includes(message.author.id)) {
  return message.reply({
    embeds: [BLACKLIST],
    components: [row],
  })
}
const args = message.content.slice(PREFIX.length).trim().split(/ +/),
  command = args.shift().toLowerCase()
try {
  let commandFiles =
    client.commands.get(command) ||
    client.commands.find(
      (_0x5dc409) =>
        _0x5dc409.aliases && _0x5dc409.aliases.includes(command)
    )
  if (!commandFiles) {
    return
  }
  if (commandFiles) {
    if (commandFiles.cooldown) {
      if (delay.has(commandFiles.name + '-' + message.author.id)) {
        return message.reply(
          'You can use this command again after **' +
            (ms(
              delay.get(commandFiles.name + '-' + message.author.id) -
                Date.now(),
              { long: true }
            ).includes('ms')
              ? '0 second'
              : ms(
                  delay.get(commandFiles.name + '-' + message.author.id) -
                    Date.now(),
                  { long: true }
                )) +
            '**'
        )
      }
      command.execute(client, message, args, ee, prefix);
      const commandLogsChannel = client.channels.cache.get(config.botlogs.commandLogsChannel);
      if (!commandLogsChannel) return;
      commandLogsChannel.send({
          embeds: [new MessageEmbed()
              .setColor(ee.color)
              .setAuthor(message.guild.name, message.guild.iconURL({
                  dynamic: true
              }))
              .setTitle(`<:join:906786246767038515> Prefix Command`)
              .addField("**<:join:906786246767038515> Author**", `\`\`\`${message.author.tag}\`\`\``)
              .addField("**<:join:906786246767038515> Command Name**", `\`\`\`${command.name}\`\`\``)
          ]
      });

} catch (_0x2b8a1a) {
  console.error(_0x2b8a1a)
  message.reply('there was an error trying to execute that command!')
}
}
},
}
