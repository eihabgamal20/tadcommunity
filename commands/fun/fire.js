//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const Discord = require("discord.js");
const { AME_API } = require('../../json/config.json');
const ameClient = require('amethyste-api')
const AmeAPI = new ameClient(AME_API)

module.exports = {
    
        name: "fire",
        aliases: ['setfire', 'sf'],
        description: "Sets User On Fire!",
  async execute(client, message, args) {
function _0x277a(){const _0x1768f4=['ts/message','5272PmHiug','207JoJiHi','\x20\x20\x20تم\x20التخ','werCase','442410caNeUO','ank\x20you\x20fo','cache','member','tarURL','guild','**Please\x20W','56IPopXi','join','\x20been\x20vand','fire.png','صالح\x20للاست','748064wIFEAY','channel','541190JDmiBu','ait...**','خدام\x20شكرا\x20','erstanding','MessageAtt','usable.\x20Th','**The\x20bot\x20','1271870coCoTh','achment','ريب\x20في\x20ملف','لتفهمك**','get','reply','find','mentions','3126WghcVm','displayNam','105050UlpcsB','toLocaleLo','user','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','files\x20have','toLowerCas','6827850vsfyld','members','\x20اصبح\x20غير\x20','../../even','ات\x20البوت\x20و','generate','username','first','send','delete','fire','\x20become\x20un','Create.js','displayAva','r\x20your\x20und','png','alized\x20and'];_0x277a=function(){return _0x1768f4;};return _0x277a();}const _0x2c4f93=_0x1d35;(function(_0x389f73,_0x2d4a3b){const _0x412a74=_0x1d35,_0x3b40b4=_0x389f73();while(!![]){try{const _0x2e4fa4=-parseInt(_0x412a74(0x1a1))/(0x1c74+0x151*-0x11+-0x206*0x3)+parseInt(_0x412a74(0x1ab))/(0x36e+0x1ccc+0x407*-0x8)+-parseInt(_0x412a74(0x1a9))/(0x159b+-0xfaf*-0x1+0x1*-0x2547)*(-parseInt(_0x412a74(0x188))/(0x6e*-0x25+-0x1c44+0x2c2e))+-parseInt(_0x412a74(0x1b1))/(0x1233+0x1a38+0x1*-0x2c66)+-parseInt(_0x412a74(0x18c))/(-0x1*0x229d+-0x18bc+0x3b5f*0x1)*(-parseInt(_0x412a74(0x193))/(-0x9*-0x30f+0x1*0x166f+0x1*-0x31ef))+parseInt(_0x412a74(0x198))/(-0x11da+0x5f1+0xbf1)+-parseInt(_0x412a74(0x189))/(-0x392*-0x6+0x204e+-0x35b1)*(-parseInt(_0x412a74(0x19a))/(0x217*0x4+-0x2384+0x1b32));if(_0x2e4fa4===_0x2d4a3b)break;else _0x3b40b4['push'](_0x3b40b4['shift']());}catch(_0x51bba4){_0x3b40b4['push'](_0x3b40b4['shift']());}}}(_0x277a,-0xbffc+-0x113c2e+0x1ceb40));const {wtf}=require(_0x2c4f93(0x1b4)+_0x2c4f93(0x187)+_0x2c4f93(0x182));if(!wtf)return message[_0x2c4f93(0x1a6)]({'content':_0x2c4f93(0x1a0)+_0x2c4f93(0x1af)+_0x2c4f93(0x195)+_0x2c4f93(0x186)+_0x2c4f93(0x181)+_0x2c4f93(0x19f)+_0x2c4f93(0x18d)+_0x2c4f93(0x184)+_0x2c4f93(0x19d)+_0x2c4f93(0x1ae)+_0x2c4f93(0x18a)+_0x2c4f93(0x1a3)+_0x2c4f93(0x17a)+_0x2c4f93(0x1b3)+_0x2c4f93(0x197)+_0x2c4f93(0x19c)+_0x2c4f93(0x1a4)});function _0x1d35(_0x109b70,_0x136e46){const _0x5afc87=_0x277a();return _0x1d35=function(_0x40f706,_0x209aff){_0x40f706=_0x40f706-(0x1973+-0x1195+-0x664);let _0x216b8f=_0x5afc87[_0x40f706];return _0x216b8f;},_0x1d35(_0x109b70,_0x136e46);}let user=await message[_0x2c4f93(0x1a8)][_0x2c4f93(0x1b2)][_0x2c4f93(0x17d)]()||message[_0x2c4f93(0x191)][_0x2c4f93(0x1b2)][_0x2c4f93(0x18e)][_0x2c4f93(0x1a5)](args[-0xbb1+0xe62+-0x35*0xd])||message[_0x2c4f93(0x191)][_0x2c4f93(0x1b2)][_0x2c4f93(0x18e)][_0x2c4f93(0x1a7)](_0x1dfd00=>_0x1dfd00[_0x2c4f93(0x1ad)][_0x2c4f93(0x17c)][_0x2c4f93(0x1b0)+'e']()===args[_0x2c4f93(0x194)]('\x20')[_0x2c4f93(0x1ac)+_0x2c4f93(0x18b)]())||message[_0x2c4f93(0x191)][_0x2c4f93(0x1b2)][_0x2c4f93(0x18e)][_0x2c4f93(0x1a7)](_0x8df68c=>_0x8df68c[_0x2c4f93(0x1aa)+'e'][_0x2c4f93(0x1b0)+'e']()===args[_0x2c4f93(0x194)]('\x20')[_0x2c4f93(0x1ac)+_0x2c4f93(0x18b)]())||message[_0x2c4f93(0x18f)],m=await message[_0x2c4f93(0x199)][_0x2c4f93(0x17e)](_0x2c4f93(0x192)+_0x2c4f93(0x19b)),buffer=await AmeAPI[_0x2c4f93(0x17b)](_0x2c4f93(0x180),{'url':user[_0x2c4f93(0x1ad)][_0x2c4f93(0x183)+_0x2c4f93(0x190)]({'format':_0x2c4f93(0x185),'size':0x200})}),attachment=new Discord[(_0x2c4f93(0x19e))+(_0x2c4f93(0x1a2))](buffer,_0x2c4f93(0x196));m[_0x2c4f93(0x17f)]({'timeout':0x1388}),message[_0x2c4f93(0x199)][_0x2c4f93(0x17e)]({'files':[attachment]});
    }
};


