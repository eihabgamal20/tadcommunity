const fs = require('fs')
module.exports = (client) => {
  const eventFiles = fs
    .readdirSync('./events')
    .filter((_0x801794) => _0x801794.endsWith('.js'))
  for (const file of eventFiles) {
    const event = require('../events/' + file)
    event.once
      ? client.once(event.name, (..._0x4eacc3) =>
          event.execute(client, ..._0x4eacc3)
        )
      : client.on(event.name, (..._0x541aa7) =>
          event.execute(client, ..._0x541aa7)
        )
  }
}
