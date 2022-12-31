const { Message, Client } = require('discord.js')
module.exports = {
  name: 'clear',
  aliases: ['مسح'],
  description: `cleans messages from a channel.`,
  async execute(client, message, args) {
    const { wtf } = require('../../events/messageCreate.js')
    if (!wtf) {
      return message.reply({
        content:
          '**The bot files have been vandalized and become unusable. Thank you for your understanding \n           تم التخريب في ملفات البوت و اصبح غير صالح للاستخدام شكرا لتفهمك**',
      })
    }
    const permission = message.member.permissions.has('MANAGE_MESSAGES'),
      guilds = message.guild.me.permissions.has('MANAGE_MESSAGES')
    if (!permission) {
      return message
        .reply({
          content: ":x: **You don't have permission to use this command**",
          ephemeral: true,
        })
        .catch((zeyla) => {
          console.log("i couldn't reply to the message: " + zeyla.message)
        })
    }
    if (!guilds) {
      return message
        .reply({
          content:
            ":rolling_eyes: **I couldn't ban that user. Please check my permissions and role position.**",
          ephemeral: true,
        })
        .catch((beresford) => {
          console.log("i couldn't reply to the message: " + beresford.message)
        })
    }
    args[0] = args[0] ? parseInt(args[0]) : 100
    if (isNaN(args[0])) {
      return message
        .reply({ content: 'Please provide valid number' })
        .catch((yamarie) => {
          console.log("i couldn't reply to the message: " + yamarie.message)
        })
    }
    if (args[0] > 100) {
      return message
        .reply({
          content:
            ":rolling_eyes: **You can't delete more than __100__ messages**",
        })
        .catch((saxton) => {
          console.log("i couldn't reply to the message: " + saxton.message)
        })
    }
    if (args[0] < 2) {
      return message
        .reply({
          content:
            ':rolling_eyes: **You need to delete at least __2__ messages**',
        })
        .catch((tiarra) => {
          console.log("i couldn't reply to the message: " + tiarra.message)
        })
    }
    let messages = await message.channel.messages.fetch({ limit: args[0] })
    messages = messages.filter(
      (rishav) =>
        Date.now() - new Date(rishav.createdTimestamp).getTime() <= 1209600000
    )
    message.channel
      .bulkDelete(messages)
      .catch((gurvir) => console.log(gurvir.message))
    message.channel
      .send('```js\n ' + messages.size + ' messages have been deleted.```\n')
      .then((jerrall) => {
        setTimeout(() => jerrall.delete(), 6000)
      })
      .catch((valaysia) => {
        console.log("i couldn't reply to the message: " + valaysia.message)
      })
  },
}
