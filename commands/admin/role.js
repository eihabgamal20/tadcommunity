/



const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
        name: "role",
      aliases: ['رول'],

        description: `Add/remove a role for a user.`,
  async execute(client, message, args) {
function _0x2c7b(){const _0x4d600f=['e:\x20','remove','member','\x20reply\x20to\x20','\x20role\x20','PAYhA','**The\x20bot\x20','mentions','his\x20comman','erstanding','this\x20membe','\x20been\x20vand','an\x20you**','r**','ole\x20name\x20*','HHZlP','first','10rqufmX','catch','\x20position.','LPYkw','خدام\x20شكرا\x20','roles','\x20become\x20un','cify\x20one\x20r','includes','Please\x20spe','displayHex','d**','setColor','MANAGE_ROL','er.\x20Please','i\x20couldn\x27t','alized\x20and','er\x20role\x20th','yes:\x20**Ple','n\x20to\x20use\x20t','41555FqEvfH','yes:\x20**You','Color','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','hanged\x20rol','yes:\x20**I\x20c',',\x20+\x20**','ts/message','has','لتفهمك**','log','user','\x20\x20\x20تم\x20التخ','tion','r\x20your\x20und','334198kKOlEf','message','members',':x:\x20**You\x20','692hhSWjp','werCase','VOKZS','\x20can\x27t\x20add','the\x20messag','s\x20and\x20role','cache','an\x27t\x20find\x20','BiJiS','\x20permissio',':rolling_e','\x20اصبح\x20غير\x20','highest','find','ouldn\x27t\x20mu','ase\x20mentio','don\x27t\x20have','EZwpz','2584848JLjTNh','yZULl','1170928eItsjc','r\x20id**','reply','ck_mark:\x20C','permission','ريب\x20في\x20ملف','ات\x20البوت\x20و','yes:\x20-\x20**\x20','n\x20member\x20o','1625078sLEPLj','\x20have\x20high','29876769qGdsox','1735386VOcTYt','ank\x20you\x20fo','position',':white_che','username','es\x20','guild','files\x20have','te\x20that\x20us','صالح\x20للاست','../../even','setDescrip','toLocaleLo','UYdPv','get','Create.js',',\x20-\x20**','add','name','\x20check\x20my\x20','usable.\x20Th'];_0x2c7b=function(){return _0x4d600f;};return _0x2c7b();}const _0x48b6c6=_0x40e2;(function(_0x2e1e66,_0x5d487b){const _0x54934b=_0x40e2,_0x1f1fcb=_0x2e1e66();while(!![]){try{const _0x193f7c=-parseInt(_0x54934b(0x136))/(0x19b7+0x1b11+-0x34c7)*(parseInt(_0x54934b(0x113))/(0x67*-0x1f+0x2*0xff6+-0x1371))+parseInt(_0x54934b(0xdf))/(0x5*-0x278+0x1*-0x6a2+0x12fd)+-parseInt(_0x54934b(0xcd))/(0x910+0xdee+-0x16fa)*(parseInt(_0x54934b(0x127))/(0x1*-0x17fb+-0x5e*0x45+-0x3156*-0x1))+parseInt(_0x54934b(0xed))/(-0xbc*0x6+0x8a1+-0x433*0x1)+-parseInt(_0x54934b(0xea))/(-0x7bf*-0x2+0x52e+-0x14a5)+-parseInt(_0x54934b(0xe1))/(0x2c4+0x38*-0xc+-0x4*0x7)+parseInt(_0x54934b(0xec))/(-0x9c*-0x1+0x13a8+-0x143b*0x1);if(_0x193f7c===_0x5d487b)break;else _0x1f1fcb['push'](_0x1f1fcb['shift']());}catch(_0x3332c7){_0x1f1fcb['push'](_0x1f1fcb['shift']());}}}(_0x2c7b,0x14562b+0x1c0043+-0x2155e7));const {wtf}=require(_0x48b6c6(0xf7)+_0x48b6c6(0x12e)+_0x48b6c6(0xfc));if(!wtf)return message[_0x48b6c6(0xe3)]({'content':_0x48b6c6(0x108)+_0x48b6c6(0xf4)+_0x48b6c6(0x10d)+_0x48b6c6(0x123)+_0x48b6c6(0x119)+_0x48b6c6(0x101)+_0x48b6c6(0xee)+_0x48b6c6(0x135)+_0x48b6c6(0x10b)+_0x48b6c6(0x12a)+_0x48b6c6(0x133)+_0x48b6c6(0xe6)+_0x48b6c6(0xe7)+_0x48b6c6(0xd8)+_0x48b6c6(0xf6)+_0x48b6c6(0x117)+_0x48b6c6(0x130)});const member=message[_0x48b6c6(0x109)][_0x48b6c6(0xcb)][_0x48b6c6(0x112)]()||message[_0x48b6c6(0xf3)][_0x48b6c6(0xcb)][_0x48b6c6(0xd3)][_0x48b6c6(0xfb)](args[0x1*0x1565+0x12*0x9c+0x205d*-0x1]),permission=message[_0x48b6c6(0x104)][_0x48b6c6(0xe5)+'s'][_0x48b6c6(0x12f)](_0x48b6c6(0x120)+'ES'),guilds=message[_0x48b6c6(0xf3)]['me'][_0x48b6c6(0xe5)+'s'][_0x48b6c6(0x12f)](_0x48b6c6(0x120)+'ES');if(!permission)return message[_0x48b6c6(0xe3)]({'content':_0x48b6c6(0xcc)+_0x48b6c6(0xdd)+_0x48b6c6(0xd6)+_0x48b6c6(0x126)+_0x48b6c6(0x10a)+_0x48b6c6(0x11e),'ephemeral':!![]})[_0x48b6c6(0x114)](_0x472ed3=>{const _0x2cfef2=_0x48b6c6,_0x41e7e9={'VOKZS':function(_0x24f063,_0x2d4a0b){return _0x24f063+_0x2d4a0b;}};console[_0x2cfef2(0x131)](_0x41e7e9[_0x2cfef2(0xcf)](_0x2cfef2(0x122)+_0x2cfef2(0x105)+_0x2cfef2(0xd1)+_0x2cfef2(0x102),_0x472ed3[_0x2cfef2(0xca)]));});if(!args[0x199*0x17+-0x106e+-0x1451])return message[_0x48b6c6(0xe3)]({'content':_0x48b6c6(0xd7)+_0x48b6c6(0x125)+_0x48b6c6(0xdc)+_0x48b6c6(0xe9)+_0x48b6c6(0xe2),'ephemeral':!![]})[_0x48b6c6(0x114)](_0x1426f9=>{const _0x3bf3d0=_0x48b6c6,_0x31e941={'yZULl':function(_0x54b6fb,_0x21b385){return _0x54b6fb+_0x21b385;}};console[_0x3bf3d0(0x131)](_0x31e941[_0x3bf3d0(0xe0)](_0x3bf3d0(0x122)+_0x3bf3d0(0x105)+_0x3bf3d0(0xd1)+_0x3bf3d0(0x102),_0x1426f9[_0x3bf3d0(0xca)]));});if(!member)return message[_0x48b6c6(0xe3)]({'content':_0x48b6c6(0xd7)+_0x48b6c6(0x12c)+_0x48b6c6(0xd4)+_0x48b6c6(0x10c)+_0x48b6c6(0x10f),'ephemeral':!![]})[_0x48b6c6(0x114)](_0x2e6dc3=>{const _0x50b8c6=_0x48b6c6,_0x3959c6={'HHZlP':function(_0x4733f5,_0x5fa9bf){return _0x4733f5+_0x5fa9bf;}};console[_0x50b8c6(0x131)](_0x3959c6[_0x50b8c6(0x111)](_0x50b8c6(0x122)+_0x50b8c6(0x105)+_0x50b8c6(0xd1)+_0x50b8c6(0x102),_0x2e6dc3[_0x50b8c6(0xca)]));});function _0x40e2(_0x30ac97,_0x1067e3){const _0x8e77be=_0x2c7b();return _0x40e2=function(_0x23a5f8,_0x2d5621){_0x23a5f8=_0x23a5f8-(0xd8f+0x1*-0x2485+0x17c0);let _0x133fc9=_0x8e77be[_0x23a5f8];return _0x133fc9;},_0x40e2(_0x30ac97,_0x1067e3);}if(message[_0x48b6c6(0x104)][_0x48b6c6(0x118)][_0x48b6c6(0xd9)][_0x48b6c6(0xef)]<member[_0x48b6c6(0x118)][_0x48b6c6(0xd9)][_0x48b6c6(0xef)])return message[_0x48b6c6(0xe3)]({'content':_0x48b6c6(0xd7)+_0x48b6c6(0x128)+_0x48b6c6(0xd0)+_0x48b6c6(0x106)+member[_0x48b6c6(0x132)][_0x48b6c6(0xf1)]+(_0x48b6c6(0xeb)+_0x48b6c6(0x124)+_0x48b6c6(0x10e)),'ephemeral':!![]})[_0x48b6c6(0x114)](_0x51677e=>{const _0x2c026d=_0x48b6c6,_0x17f66b={'LPYkw':function(_0x19170b,_0x14b926){return _0x19170b+_0x14b926;}};console[_0x2c026d(0x131)](_0x17f66b[_0x2c026d(0x116)](_0x2c026d(0x122)+_0x2c026d(0x105)+_0x2c026d(0xd1)+_0x2c026d(0x102),_0x51677e[_0x2c026d(0xca)]));});if(!guilds)return message[_0x48b6c6(0xe3)]({'content':_0x48b6c6(0xd7)+_0x48b6c6(0x12c)+_0x48b6c6(0xdb)+_0x48b6c6(0xf5)+_0x48b6c6(0x121)+_0x48b6c6(0x100)+_0x48b6c6(0xe5)+_0x48b6c6(0xd2)+_0x48b6c6(0x115)+'**','ephemeral':!![]})[_0x48b6c6(0x114)](_0x50ce48=>{const _0x1814b3=_0x48b6c6,_0x5114bd={'BiJiS':function(_0x2a1c85,_0x4d4f75){return _0x2a1c85+_0x4d4f75;}};console[_0x1814b3(0x131)](_0x5114bd[_0x1814b3(0xd5)](_0x1814b3(0x122)+_0x1814b3(0x105)+_0x1814b3(0xd1)+_0x1814b3(0x102),_0x50ce48[_0x1814b3(0xca)]));});let role=message[_0x48b6c6(0x109)][_0x48b6c6(0x118)][_0x48b6c6(0x112)]()||message[_0x48b6c6(0xf3)][_0x48b6c6(0x118)][_0x48b6c6(0xd3)][_0x48b6c6(0xda)](_0x5537af=>_0x5537af[_0x48b6c6(0xff)][_0x48b6c6(0xf9)+_0x48b6c6(0xce)]()[_0x48b6c6(0x11b)](args[0x275+-0x3*-0x4c2+-0x10ba]))||message[_0x48b6c6(0xf3)][_0x48b6c6(0x118)][_0x48b6c6(0xd3)][_0x48b6c6(0xfb)](args[-0x14c*-0x7+-0x139*-0x8+0x12db*-0x1]);if(!role)return message[_0x48b6c6(0xe3)]({'content':_0x48b6c6(0xd7)+_0x48b6c6(0xe8)+_0x48b6c6(0x11c)+_0x48b6c6(0x11a)+_0x48b6c6(0x110)+'*','ephemeral':!![]})[_0x48b6c6(0x114)](_0xb24c06=>{const _0x387542=_0x48b6c6,_0x42d77c={'PAYhA':function(_0x515ef6,_0x4491ec){return _0x515ef6+_0x4491ec;}};console[_0x387542(0x131)](_0x42d77c[_0x387542(0x107)](_0x387542(0x122)+_0x387542(0x105)+_0x387542(0xd1)+_0x387542(0x102),_0xb24c06[_0x387542(0xca)]));});if(!member[_0x48b6c6(0x118)][_0x48b6c6(0xd3)][_0x48b6c6(0x12f)](role['id'])){member[_0x48b6c6(0x118)][_0x48b6c6(0xfe)](role['id']);let embed=new MessageEmbed()[_0x48b6c6(0xf8)+_0x48b6c6(0x134)](_0x48b6c6(0xf0)+_0x48b6c6(0xe4)+_0x48b6c6(0x12b)+_0x48b6c6(0xf2)+member[_0x48b6c6(0x132)][_0x48b6c6(0xf1)]+_0x48b6c6(0x12d)+role[_0x48b6c6(0xff)]+'**')[_0x48b6c6(0x11f)](message[_0x48b6c6(0xf3)]['me'][_0x48b6c6(0x11d)+_0x48b6c6(0x129)]);message[_0x48b6c6(0xe3)]({'embeds':[embed]})[_0x48b6c6(0x114)](_0x49ac96=>{const _0x3ffaba=_0x48b6c6,_0x11837c={'EZwpz':function(_0x3f1d2e,_0x1f6a8f){return _0x3f1d2e+_0x1f6a8f;}};console[_0x3ffaba(0x131)](_0x11837c[_0x3ffaba(0xde)](_0x3ffaba(0x122)+_0x3ffaba(0x105)+_0x3ffaba(0xd1)+_0x3ffaba(0x102),_0x49ac96[_0x3ffaba(0xca)]));});}else{member[_0x48b6c6(0x118)][_0x48b6c6(0x103)](role['id']);let embed=new MessageEmbed()[_0x48b6c6(0xf8)+_0x48b6c6(0x134)](_0x48b6c6(0xf0)+_0x48b6c6(0xe4)+_0x48b6c6(0x12b)+_0x48b6c6(0xf2)+member[_0x48b6c6(0x132)][_0x48b6c6(0xf1)]+_0x48b6c6(0xfd)+role[_0x48b6c6(0xff)]+'**')[_0x48b6c6(0x11f)](message[_0x48b6c6(0xf3)]['me'][_0x48b6c6(0x11d)+_0x48b6c6(0x129)]);message[_0x48b6c6(0xe3)]({'embeds':[embed]})[_0x48b6c6(0x114)](_0x2c9cec=>{const _0x389ace=_0x48b6c6,_0x42d0e6={'UYdPv':function(_0x265609,_0x30ea09){return _0x265609+_0x30ea09;}};console[_0x389ace(0x131)](_0x42d0e6[_0x389ace(0xfa)](_0x389ace(0x122)+_0x389ace(0x105)+_0x389ace(0xd1)+_0x389ace(0x102),_0x2c9cec[_0x389ace(0xca)]));});}
    },
};
