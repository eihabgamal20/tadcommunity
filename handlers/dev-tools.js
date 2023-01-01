 
const fs = require('fs')
module.exports = (client) => {
  const eventFiles = fs
    .readdirSync('./events/developer-tools')
    .filter((_0x48d2a7) => _0x48d2a7.endsWith('.js'))
  for (const file of eventFiles) {
    const event = require('../events/developer-tools/' + file)
    event.once
      ? client.once(event.name, (..._0x2ffe50) =>
          event.execute(client, ..._0x2ffe50)
        )
      : client.on(event.name, (..._0x1ec520) =>
          event.execute(client, ..._0x1ec520)
        )
  }
}
