/



const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
const { DiscordTogether } = require('discord-together')
const { wordsnack } = require('../../json/activities-banner.json')

module.exports = {
  name: "wordsnack",
  description: `Play wordsnack game in the channel.`,
  aliases: [],
  async execute(client, message, args) {
const _0x2e38fc=_0x3d02;function _0x3d02(_0x4772a0,_0x4ea2d6){const _0x4db997=_0x50bd();return _0x3d02=function(_0x544a38,_0x211353){_0x544a38=_0x544a38-(0x2*0x115f+0x1de1*0x1+0x6c*-0x97);let _0x523f43=_0x4db997[_0x544a38];return _0x523f43;},_0x3d02(_0x4772a0,_0x4ea2d6);}(function(_0x343ddf,_0x46b6b8){const _0x31da74=_0x3d02,_0x3fe122=_0x343ddf();while(!![]){try{const _0x4060d0=parseInt(_0x31da74(0x125))/(-0x147+-0x451*-0x3+-0xbab)+-parseInt(_0x31da74(0xf8))/(-0x12f8+0x1*0xf1d+0x1*0x3dd)+-parseInt(_0x31da74(0x102))/(-0x453*-0x2+-0x2*0x6b5+0x4c7)+-parseInt(_0x31da74(0xfd))/(-0x252b+0x175d+0xdd2*0x1)+parseInt(_0x31da74(0x124))/(0x1882+-0x1053+-0xbe*0xb)+-parseInt(_0x31da74(0xf1))/(-0x326*0x1+-0x92a+-0x1*-0xc56)+parseInt(_0x31da74(0xf4))/(-0x2388+-0x5*0x1ed+-0x5a6*-0x8)*(parseInt(_0x31da74(0x11f))/(-0x1*-0x2e7+-0x1fb7+-0x34*-0x8e));if(_0x4060d0===_0x46b6b8)break;else _0x3fe122['push'](_0x3fe122['shift']());}catch(_0x449ea1){_0x3fe122['push'](_0x3fe122['shift']());}}}(_0x50bd,-0x2dc42*-0x1+-0xffcaf+0x7d4b*0x34));const {wtf}=require(_0x2e38fc(0x13e)+_0x2e38fc(0x115)+_0x2e38fc(0x104));if(!wtf)return message[_0x2e38fc(0x12e)]({'content':_0x2e38fc(0x141)+_0x2e38fc(0x118)+_0x2e38fc(0xf0)+_0x2e38fc(0x11b)+_0x2e38fc(0x106)+_0x2e38fc(0xf6)+_0x2e38fc(0xfc)+_0x2e38fc(0x11e)+_0x2e38fc(0x13d)+_0x2e38fc(0x11a)+_0x2e38fc(0x13c)+_0x2e38fc(0xf3)+_0x2e38fc(0x11c)+_0x2e38fc(0xfa)+_0x2e38fc(0x133)+_0x2e38fc(0x12a)+_0x2e38fc(0x128)});client[_0x2e38fc(0x112)+_0x2e38fc(0x119)]=new DiscordTogether(client);if(!message[_0x2e38fc(0x121)][_0x2e38fc(0x136)][_0x2e38fc(0x113)])return message[_0x2e38fc(0x12e)]({'content':_0x2e38fc(0x116)+_0x2e38fc(0x100)+_0x2e38fc(0x137)+_0x2e38fc(0x127)+_0x2e38fc(0xee)+_0x2e38fc(0x10c)+_0x2e38fc(0x10b),'ephemeral':!![]})[_0x2e38fc(0x111)](_0x53b139=>{const _0x5ce72d=_0x2e38fc,_0xcc1c83={'XlwYS':function(_0x3102d4,_0x2c361a){return _0x3102d4+_0x2c361a;}};console[_0x5ce72d(0x131)](_0xcc1c83[_0x5ce72d(0x12b)](_0x5ce72d(0xef)+_0x5ce72d(0xed)+_0x5ce72d(0xfb)+_0x5ce72d(0xf7),_0x53b139[_0x5ce72d(0xeb)]));});function _0x50bd(){const _0x23aa32=['Requested\x20','خدام\x20شكرا\x20','XlwYS','setLabel','then','reply','author','addCompone','log','setStyle','صالح\x20للاست','displayCol','guild','voice','\x20must\x20join','displayAva','**[Click\x20h','uUxIB','iconURL','\x20\x20\x20تم\x20التخ','erstanding','../../even','setURL','name','**The\x20bot\x20','message','by\x20','\x20reply\x20to\x20','channel\x20to','i\x20couldn\x27t','\x20been\x20vand','1815756LWsuiH','ether!](','ريب\x20في\x20ملف','378otnukY','setAuthor','usable.\x20Th','e:\x20','1668754Yymlrt','n\x20wordsnac','\x20اصبح\x20غير\x20','the\x20messag','ank\x20you\x20fo','3261044XqYsXP','setDescrip','send','yes:\x20**You','createToge','90420yrMImA','setImage','Create.js','setFooter','\x20become\x20un','code','therCode','eBRML','k\x20game\x20tog','command!**','\x20use\x20this\x20','nts','setColor','ere\x20to\x20joi','wordsnack','catch','discordTog','channel','tag','ts/message',':rolling_e','qJWVQ','files\x20have','ether','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','alized\x20and','ات\x20البوت\x20و','tion','r\x20your\x20und','167824ytNbMt',')**','member','Play','LINK','4981620waDElW','660899LyaYcO','tarURL','\x20an\x20voice\x20','لتفهمك**'];_0x50bd=function(){return _0x23aa32;};return _0x50bd();}client[_0x2e38fc(0x112)+_0x2e38fc(0x119)][_0x2e38fc(0x101)+_0x2e38fc(0x108)](message[_0x2e38fc(0x121)][_0x2e38fc(0x136)][_0x2e38fc(0x113)]['id'],_0x2e38fc(0x110))[_0x2e38fc(0x12d)](async _0x55dbeb=>{const _0x3f6eca=_0x2e38fc,_0x51e24c={'eBRML':function(_0x295664,_0x2278de){return _0x295664+_0x2278de;},'uUxIB':_0x3f6eca(0x123),'qJWVQ':_0x3f6eca(0x122)},_0x5b3b71=new MessageEmbed()[_0x3f6eca(0xf5)](message[_0x3f6eca(0x135)][_0x3f6eca(0x140)],message[_0x3f6eca(0x135)][_0x3f6eca(0x13b)]({'dynamic':!![]}))[_0x3f6eca(0x10e)](message[_0x3f6eca(0x135)]['me'][_0x3f6eca(0x134)+'or'])[_0x3f6eca(0xfe)+_0x3f6eca(0x11d)](_0x3f6eca(0x139)+_0x3f6eca(0x10f)+_0x3f6eca(0xf9)+_0x3f6eca(0x10a)+_0x3f6eca(0xf2)+_0x55dbeb[_0x3f6eca(0x107)]+_0x3f6eca(0x120))[_0x3f6eca(0x103)](wordsnack)[_0x3f6eca(0x105)](_0x3f6eca(0x129)+_0x3f6eca(0xec)+message[_0x3f6eca(0x12f)][_0x3f6eca(0x114)],message[_0x3f6eca(0x12f)][_0x3f6eca(0x138)+_0x3f6eca(0x126)]({'dynamic':!![]}));let _0x581a01=new MessageActionRow()[_0x3f6eca(0x130)+_0x3f6eca(0x10d)](new MessageButton()[_0x3f6eca(0x132)](_0x51e24c[_0x3f6eca(0x13a)])[_0x3f6eca(0x12c)](_0x51e24c[_0x3f6eca(0x117)])[_0x3f6eca(0x13f)](''+_0x55dbeb[_0x3f6eca(0x107)]));message[_0x3f6eca(0x113)][_0x3f6eca(0xff)]({'embeds':[_0x5b3b71],'components':[_0x581a01]})[_0x3f6eca(0x111)](_0x2d4da2=>{const _0x2e8dfa=_0x3f6eca;console[_0x2e8dfa(0x131)](_0x51e24c[_0x2e8dfa(0x109)](_0x2e8dfa(0xef)+_0x2e8dfa(0xed)+_0x2e8dfa(0xfb)+_0x2e8dfa(0xf7),_0x2d4da2[_0x2e8dfa(0xeb)]));});});
  },
};
