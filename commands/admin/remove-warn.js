/


const { Message, Client, MessageEmbed } = require("discord.js");
const db = require('quick.db')

module.exports = {
        name: "remove-warn",
      aliases: ['مسح التحذير'],

        description: `removes warn from a user.`,
  async execute(client, message, args) {
function _0x9ebf(){const _0x8dc99d=['لتفهمك**','yes:\x20**Ple','../../even','r\x20id**','user','ase\x20mentio','181563npnUao','permission','from\x20','reply','member','catch','*done\x20remo','the\x20messag','ved\x20','ts/message','n\x20to\x20use\x20t','alized\x20and','files\x20have','n\x20member\x20o','first','4OrDqli','warns_','\x20permissio','get','1024408mSqhHb','subtract',':x:\x20**You\x20','MANAGE_MES','username','.**','\x20reply\x20to\x20','members','ck_mark:\x20*','isNaN','\x20warnings\x20','خدام\x20شكرا\x20','843939ZRLqOY','ank\x20you\x20fo','om\x20','has','صالح\x20للاست','mentions','2667380YgoTWt','ving\x20','his\x20comman','message','ريب\x20في\x20ملف','\x20\x20\x20تم\x20التخ','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','11082776XwuZhB','\x20become\x20un','\x20been\x20vand','ات\x20البوت\x20و','don\x27t\x20have','erstanding','cache','usable.\x20Th','d**','e:\x20','1174056fzdQmY',':white_che','log','SAGES','**The\x20bot\x20',':rolling_e','i\x20couldn\x27t','guild','\x20اصبح\x20غير\x20','\x20warn/s\x20fr','r\x20your\x20und','Create.js','5532702JBshiy','delete','YoPNr'];_0x9ebf=function(){return _0x8dc99d;};return _0x9ebf();}const _0x42a1fb=_0x6bf4;function _0x6bf4(_0x195d2c,_0xd0dc02){const _0x5c0745=_0x9ebf();return _0x6bf4=function(_0x3470d6,_0x26542b){_0x3470d6=_0x3470d6-(0x1e22+0x1734+0x1a*-0x206);let _0x162c1f=_0x5c0745[_0x3470d6];return _0x162c1f;},_0x6bf4(_0x195d2c,_0xd0dc02);}(function(_0x5cb65c,_0x4de364){const _0x5da8c9=_0x6bf4,_0x4cd179=_0x5cb65c();while(!![]){try{const _0x537cfc=parseInt(_0x5da8c9(0xf3))/(0x1eb5+-0x5c+-0x1e58)+-parseInt(_0x5da8c9(0xe7))/(0x53*-0xf+-0x3ea*0x3+0x109d)+parseInt(_0x5da8c9(0xd4))/(-0x10be*0x1+0x6b9*-0x1+0x177a)*(-parseInt(_0x5da8c9(0xe3))/(0x16cb+0x2f8+-0x19bf))+-parseInt(_0x5da8c9(0xf9))/(0x4*-0x1af+0x7c+0x217*0x3)+parseInt(_0x5da8c9(0xbf))/(0x2130+0x1571*0x1+-0x369b)+-parseInt(_0x5da8c9(0xcb))/(0x17f6*0x1+-0x1347+0x2*-0x254)+parseInt(_0x5da8c9(0x100))/(0x13d0+-0xf97+-0x431);if(_0x537cfc===_0x4de364)break;else _0x4cd179['push'](_0x4cd179['shift']());}catch(_0x18bb03){_0x4cd179['push'](_0x4cd179['shift']());}}}(_0x9ebf,0x30419*-0x2+0x1*-0x4be4b+0x142*0xefa));const {wtf}=require(_0x42a1fb(0xd0)+_0x42a1fb(0xdd)+_0x42a1fb(0xca));if(!wtf)return message[_0x42a1fb(0xd7)]({'content':_0x42a1fb(0xc3)+_0x42a1fb(0xe0)+_0x42a1fb(0x102)+_0x42a1fb(0xdf)+_0x42a1fb(0x101)+_0x42a1fb(0xbc)+_0x42a1fb(0xf4)+_0x42a1fb(0xc9)+_0x42a1fb(0xba)+_0x42a1fb(0xff)+_0x42a1fb(0xfe)+_0x42a1fb(0xfd)+_0x42a1fb(0x103)+_0x42a1fb(0xc7)+_0x42a1fb(0xf7)+_0x42a1fb(0xf2)+_0x42a1fb(0xce)});const member=message[_0x42a1fb(0xf8)][_0x42a1fb(0xee)][_0x42a1fb(0xe2)]()||message[_0x42a1fb(0xc6)][_0x42a1fb(0xee)][_0x42a1fb(0xbb)][_0x42a1fb(0xe6)](args[0x169c+0x2d8+0x16a*-0x12]),permission=message[_0x42a1fb(0xd8)][_0x42a1fb(0xd5)+'s'][_0x42a1fb(0xf6)](_0x42a1fb(0xea)+_0x42a1fb(0xc2));if(!permission)return message[_0x42a1fb(0xd7)]({'content':_0x42a1fb(0xe9)+_0x42a1fb(0x104)+_0x42a1fb(0xe5)+_0x42a1fb(0xde)+_0x42a1fb(0xfb)+_0x42a1fb(0xbd)})[_0x42a1fb(0xd9)](_0x3ba371=>{const _0x5b627c=_0x42a1fb,_0x3a0f4e={'YoPNr':function(_0x39d7d6,_0x264fa5){return _0x39d7d6+_0x264fa5;}};console[_0x5b627c(0xc1)](_0x3a0f4e[_0x5b627c(0xcd)](_0x5b627c(0xc5)+_0x5b627c(0xed)+_0x5b627c(0xdb)+_0x5b627c(0xbe),_0x3ba371[_0x5b627c(0xfc)]));});if(member){if(!args[-0x1021+0x2d4*0x5+0x1fe]){let w=db[_0x42a1fb(0xe6)](_0x42a1fb(0xe4)+member['id'])||0x12c1+-0x108c*0x2+0xe57;db[_0x42a1fb(0xcc)](_0x42a1fb(0xe4)+member['id']),setTimeout(()=>{const _0x287b10=_0x42a1fb;message[_0x287b10(0xd7)]({'content':_0x287b10(0xc0)+_0x287b10(0xef)+_0x287b10(0xda)+_0x287b10(0xfa)+w+(_0x287b10(0xc8)+_0x287b10(0xf5))+member[_0x287b10(0xd2)][_0x287b10(0xeb)]+_0x287b10(0xec)});},0x2a7+-0x166*0x17+0x3b*0x91);}else{let c=args[0x1787*-0x1+0xd32+0xa56];if(c[_0x42a1fb(0xf0)])return;let n,w=db[_0x42a1fb(0xe6)](_0x42a1fb(0xe4)+member['id']);c>w?n=w:n=c,db[_0x42a1fb(0xe8)](_0x42a1fb(0xe4)+member['id'],n),setTimeout(()=>{const _0x90d676=_0x42a1fb;message[_0x90d676(0xd7)]({'content':_0x90d676(0xc0)+_0x90d676(0xef)+_0x90d676(0xda)+_0x90d676(0xdc)+n+(_0x90d676(0xf1)+_0x90d676(0xd6))+member[_0x90d676(0xd2)][_0x90d676(0xeb)]+_0x90d676(0xec)});},-0xcbd*-0x3+0x8fe+-0x2b4d);}}else message[_0x42a1fb(0xd7)]({'content':_0x42a1fb(0xc4)+_0x42a1fb(0xcf)+_0x42a1fb(0xd3)+_0x42a1fb(0xe1)+_0x42a1fb(0xd1)});
        },
};