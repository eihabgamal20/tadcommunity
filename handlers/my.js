const fs = require('fs')
module.exports = (_0x18c1b0) => {
  const _0x3eeefa = fs
    .readdirSync('./my_code')
    .filter((_0x57ae69) => _0x57ae69.endsWith('.js'))
  for (const _0x22cb89 of _0x3eeefa) {
    const _0x50d178 = require('../my_code/' + _0x22cb89)
    _0x50d178.once
      ? _0x18c1b0.once(_0x50d178.name, (..._0x7aa849) =>
          _0x50d178.execute(_0x18c1b0, ..._0x7aa849)
        )
      : _0x18c1b0.on(_0x50d178.name, (..._0x255711) =>
          _0x50d178.execute(_0x18c1b0, ..._0x255711)
        )
  }
}
