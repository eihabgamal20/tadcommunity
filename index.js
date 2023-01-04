//////  بسم الله الرحمن الرحيم
/////////////bob
const axios = require('axios')
const express = require('express')
const app = express()
app.use('/ping', (req, res) => {
  res.send(new Date())
})
const { PREFIX, allMentions, port, token } = require('./json/config.json')
app.listen(port, () => {
  console.log('Express is ready.'.blue.bold)
})
const {
    Client,
    Intents,
    Collection,
    MessageActionRow,
    MessageEmbed,
    MessageButton,
  } = require('discord.js'),
  { glob } = require('glob'),
  { promisify } = require('util'),
  { joinVoiceChannel } = require('@discordjs/voice'),
  db = require('quick.db'),
  colors = require('colors'),
  client = new Client({
    intents: 32767,
    allowedMentions: { repliedUser: allMentions },
  })
require('events').EventEmitter.defaultMaxListeners = 9999999
process.on('unhandledRejection', (_0x196404) => {
  return console.log(_0x196404)
})
module.exports = client
client.commands = new Collection()
client.events = new Collection()
;['commands', 'events', 'dev-tools', 'my'].forEach((_0x6b03e6) => {
  require('./handlers/' + _0x6b03e6)(client)
})
async function home() {
  const { data: _0x506d31 } = await axios.post(
    'https://api-developer-tools.eihabgamal.repl.co/home/ho'
  )
  app.get('/', async (_0x48597e, _0x5494e8) => {
    _0x5494e8.send('' + _0x506d31?.wep)
  })
}
home()
setTimeout(() => {
  if (!client || !client.user) {
    console.log('Client Not Login, Process Kill')
    process.kill(1)
  } else {
    console.log('Client Login')
  }
}, 180000)
client
  .login(process.env.token || token)
  .then(() => {
    require('./client/player')
  })
  .catch((err) => {
    console.log(err.message)
  })
