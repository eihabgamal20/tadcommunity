 
const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

const Screenshoter = require("../../schemas/screenshoter.js");

module.exports = {
    name: "screen",
    description: `Get screenshot.`,
    aliases: [],
  async execute(client, message, args) {

  function _0x7812(){const _0x17c4f8=['822219vxEdVp','\x20reply\x20to\x20','reply','**The\x20bot\x20','e:\x20','message','usable.\x20Th','ase\x20select','erstanding','صالح\x20للاست','لتفهمك**','970912nwcjwZ','\x20a\x20screens','cCDnx','6047810CvvJsH','ank\x20you\x20fo','the\x20messag','../../even','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','i\x20couldn\x27t','\x20become\x20un','ات\x20البوت\x20و','files\x20have','36453pYRCfd','2RezScf','\x20اصبح\x20غير\x20','screenshot','**\x20:x:\x20Ple','1548463vgDRNp','alized\x20and','r\x20your\x20und','ريب\x20في\x20ملف','\x20\x20\x20تم\x20التخ','waCwG','Create.js','4lWOPVm','log','ts/message','48txPKfL','173045weqqzP','hot\x20**','خدام\x20شكرا\x20','\x20been\x20vand','2489013NbJliS','catch'];_0x7812=function(){return _0x17c4f8;};return _0x7812();}const _0x4f5091=_0xf2d2;(function(_0x517405,_0x27a90c){const _0x5836b0=_0xf2d2,_0x5b4076=_0x517405();while(!![]){try{const _0x29999f=-parseInt(_0x5836b0(0x12d))/(0x24a*0x4+0xfb1+-0x18d8)*(parseInt(_0x5836b0(0x12e))/(0x16*-0xd+0x2583+-0x2463))+-parseInt(_0x5836b0(0x116))/(0x22d7+-0x180c+-0xac8)*(parseInt(_0x5836b0(0x139))/(0x2704+-0x411*-0x3+-0x3333*0x1))+parseInt(_0x5836b0(0x13d))/(0x7*-0x301+0x212b+-0xc1f)*(-parseInt(_0x5836b0(0x13c))/(-0x4f7+-0x681+0xb7e))+-parseInt(_0x5836b0(0x132))/(-0x1546+-0x195d+0x2eaa)+parseInt(_0x5836b0(0x121))/(0x34b*-0x6+0x804+-0x16*-0x89)+parseInt(_0x5836b0(0x114))/(0x2a*-0xbd+0x3*0xc9a+0x241*-0x3)+parseInt(_0x5836b0(0x124))/(0x24c5*-0x1+-0x1*-0x1e31+-0xb*-0x9a);if(_0x29999f===_0x27a90c)break;else _0x5b4076['push'](_0x5b4076['shift']());}catch(_0x95e26b){_0x5b4076['push'](_0x5b4076['shift']());}}}(_0x7812,-0x1c3*0x8a+-0x7f*0xa7+0x12*0x3c3b));const {wtf}=require(_0x4f5091(0x127)+_0x4f5091(0x13b)+_0x4f5091(0x138));if(!wtf)return message[_0x4f5091(0x118)]({'content':_0x4f5091(0x119)+_0x4f5091(0x12c)+_0x4f5091(0x113)+_0x4f5091(0x133)+_0x4f5091(0x12a)+_0x4f5091(0x11c)+_0x4f5091(0x125)+_0x4f5091(0x134)+_0x4f5091(0x11e)+_0x4f5091(0x128)+_0x4f5091(0x136)+_0x4f5091(0x135)+_0x4f5091(0x12b)+_0x4f5091(0x12f)+_0x4f5091(0x11f)+_0x4f5091(0x13f)+_0x4f5091(0x120)});if(!args[0x2465*-0x1+0x1c33*0x1+0x832])return message[_0x4f5091(0x118)](_0x4f5091(0x131)+_0x4f5091(0x11d)+_0x4f5091(0x122)+_0x4f5091(0x13e))[_0x4f5091(0x115)](_0x47b358=>{const _0x393251=_0x4f5091,_0x485efa={'waCwG':function(_0x97caa3,_0x2c2694){return _0x97caa3+_0x2c2694;}};console[_0x393251(0x13a)](_0x485efa[_0x393251(0x137)](_0x393251(0x129)+_0x393251(0x117)+_0x393251(0x126)+_0x393251(0x11a),_0x47b358[_0x393251(0x11b)]));});function _0xf2d2(_0x4d92fb,_0x326f38){const _0x807bab=_0x7812();return _0xf2d2=function(_0x125f1b,_0x264c82){_0x125f1b=_0x125f1b-(0x1c24+-0xeb4+-0x5*0x279);let _0x1e9085=_0x807bab[_0x125f1b];return _0x1e9085;},_0xf2d2(_0x4d92fb,_0x326f38);}let s=await Screenshoter[_0x4f5091(0x130)](''+args);message[_0x4f5091(0x118)]({'files':[s]})[_0x4f5091(0x115)](_0x2d7c82=>{const _0x2af3eb=_0x4f5091,_0x211e82={'cCDnx':function(_0x59071b,_0x15143d){return _0x59071b+_0x15143d;}};console[_0x2af3eb(0x13a)](_0x211e82[_0x2af3eb(0x123)](_0x2af3eb(0x129)+_0x2af3eb(0x117)+_0x2af3eb(0x126)+_0x2af3eb(0x11a),_0x2d7c82[_0x2af3eb(0x11b)]));});
      
    },
};
