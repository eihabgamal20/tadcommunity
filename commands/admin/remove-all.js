/



const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
        name: "remove-all",
      aliases: ['مسح الكل'],

        description: `remove a roles for a user.`,
  async execute(client, message, args) {
const _0xb860be=_0x1052;(function(_0x434799,_0xb5fcc1){const _0x46a269=_0x1052,_0x311acf=_0x434799();while(!![]){try{const _0x56a447=-parseInt(_0x46a269(0x210))/(0x1*0x16a5+0x83+0x1727*-0x1)+-parseInt(_0x46a269(0x213))/(-0xba+0x1e4d*0x1+0x1d91*-0x1)+parseInt(_0x46a269(0x1e6))/(-0x1862+0x1*0x24a3+-0xc3e*0x1)+-parseInt(_0x46a269(0x217))/(0x1*-0x53+0x1bb9*0x1+-0xdb1*0x2)+-parseInt(_0x46a269(0x21d))/(-0x958+-0x1*-0x19ac+-0x104f)*(parseInt(_0x46a269(0x1ed))/(-0x6f8+0x1d60+-0x1e*0xbf))+parseInt(_0x46a269(0x1d7))/(-0x722+-0x24e1*-0x1+-0x3b7*0x8)*(-parseInt(_0x46a269(0x1fb))/(-0x5*0x162+-0x1*-0xd2b+-0x639))+parseInt(_0x46a269(0x1f9))/(0x1*0x8de+-0x14fb+0xc26)*(parseInt(_0x46a269(0x1d0))/(0x16ea+-0x166e+-0x72));if(_0x56a447===_0xb5fcc1)break;else _0x311acf['push'](_0x311acf['shift']());}catch(_0x3d89d9){_0x311acf['push'](_0x311acf['shift']());}}}(_0xa4fa,-0x1aa92+0x39d*0x84+0x31ef5));const {wtf}=require(_0xb860be(0x1f3)+_0xb860be(0x20c)+_0xb860be(0x214));if(!wtf)return message[_0xb860be(0x1eb)]({'content':_0xb860be(0x216)+_0xb860be(0x1fa)+_0xb860be(0x1c4)+_0xb860be(0x1e5)+_0xb860be(0x1d2)+_0xb860be(0x1e4)+_0xb860be(0x212)+_0xb860be(0x1dd)+_0xb860be(0x219)+_0xb860be(0x21b)+_0xb860be(0x1d4)+_0xb860be(0x1ec)+_0xb860be(0x207)+_0xb860be(0x1cc)+_0xb860be(0x1c5)+_0xb860be(0x1d9)+_0xb860be(0x1ea)});const permission=message[_0xb860be(0x1d3)][_0xb860be(0x1db)+'s'][_0xb860be(0x20b)](_0xb860be(0x205)+'ES'),guilds=message[_0xb860be(0x1c8)]['me'][_0xb860be(0x1db)+'s'][_0xb860be(0x20b)](_0xb860be(0x205)+'ES');if(!permission)return message[_0xb860be(0x1eb)]({'content':_0xb860be(0x200)+_0xb860be(0x1c6)+_0xb860be(0x206)+_0xb860be(0x1c7)+_0xb860be(0x1e3)+_0xb860be(0x21a),'ephemeral':!![]})[_0xb860be(0x1e9)](_0x3790aa=>{const _0x18df3e=_0xb860be,_0x271c68={'uktxm':function(_0x277963,_0x3f21c8){return _0x277963+_0x3f21c8;}};console[_0x18df3e(0x211)](_0x271c68[_0x18df3e(0x201)](_0x18df3e(0x1d1)+_0x18df3e(0x21c)+_0x18df3e(0x1f2)+_0x18df3e(0x1cb),_0x3790aa[_0x18df3e(0x1c9)]));});if(!guilds)return message[_0xb860be(0x1eb)]({'content':_0xb860be(0x1dc)+_0xb860be(0x209)+_0xb860be(0x204)+_0xb860be(0x20d)+_0xb860be(0x20f)+_0xb860be(0x1f7)+_0xb860be(0x1db)+_0xb860be(0x1de)+_0xb860be(0x203)+'**','ephemeral':!![]})[_0xb860be(0x1e9)](_0x466423=>{const _0x2a4b1a=_0xb860be,_0x512047={'ivYSK':function(_0x29059a,_0x22c1f3){return _0x29059a+_0x22c1f3;}};console[_0x2a4b1a(0x211)](_0x512047[_0x2a4b1a(0x1e1)](_0x2a4b1a(0x1d1)+_0x2a4b1a(0x21c)+_0x2a4b1a(0x1f2)+_0x2a4b1a(0x1cb),_0x466423[_0x2a4b1a(0x1c9)]));});let role=message[_0xb860be(0x1c3)][_0xb860be(0x1f6)][_0xb860be(0x1da)]()||message[_0xb860be(0x1c8)][_0xb860be(0x1f6)][_0xb860be(0x1ff)][_0xb860be(0x1ef)](_0x2af19c=>_0x2af19c[_0xb860be(0x202)][_0xb860be(0x1f1)+_0xb860be(0x1fe)]()[_0xb860be(0x218)](args[-0x23cc+0x1*-0x1b89+0x3f57]))||message[_0xb860be(0x1c8)][_0xb860be(0x1f6)][_0xb860be(0x1ff)][_0xb860be(0x1e7)](args[-0x1d9f*-0x1+-0x2172+0x3d5]);if(!role)return message[_0xb860be(0x1eb)]({'content':_0xb860be(0x1dc)+_0xb860be(0x1cf)+_0xb860be(0x1e2)+_0xb860be(0x1ce)+_0xb860be(0x1cd)+'*','ephemeral':!![]})[_0xb860be(0x1e9)](_0x2042ec=>{const _0x498843=_0xb860be,_0x3cf4f8={'AIQvA':function(_0x1a736f,_0x20e737){return _0x1a736f+_0x20e737;}};console[_0x498843(0x211)](_0x3cf4f8[_0x498843(0x20a)](_0x498843(0x1d1)+_0x498843(0x21c)+_0x498843(0x1f2)+_0x498843(0x1cb),_0x2042ec[_0x498843(0x1c9)]));});let users=message[_0xb860be(0x1c8)][_0xb860be(0x1df)][_0xb860be(0x1ff)][_0xb860be(0x1f5)](_0x1a620b=>_0x1a620b[_0xb860be(0x1f6)][_0xb860be(0x1ff)][_0xb860be(0x1d5)](_0x4cad3a=>_0x4cad3a['id'])[_0xb860be(0x218)](role['id']));users[_0xb860be(0x1ee)](_0x2f845a=>{const _0x3d9ece=_0xb860be;_0x2f845a[_0x3d9ece(0x1f6)][_0x3d9ece(0x1e8)](role['id']);});let embed=new MessageEmbed()[_0xb860be(0x1f8)+_0xb860be(0x1f0)](_0xb860be(0x1fc)+_0xb860be(0x20e)+_0xb860be(0x1fd)+_0xb860be(0x208)+users[_0xb860be(0x215)]+(_0xb860be(0x1d6)+'-\x20')+role[_0xb860be(0x202)]+'**')[_0xb860be(0x1d8)](message[_0xb860be(0x1c8)]['me'][_0xb860be(0x1ca)+_0xb860be(0x1e0)]);message[_0xb860be(0x1eb)]({'embeds':[embed]})[_0xb860be(0x1e9)](_0x2f8cf8=>{const _0x1a202c=_0xb860be,_0x5d7e32={'YbHHk':function(_0x42b787,_0x4d9f18){return _0x42b787+_0x4d9f18;}};console[_0x1a202c(0x211)](_0x5d7e32[_0x1a202c(0x1f4)](_0x1a202c(0x1d1)+_0x1a202c(0x21c)+_0x1a202c(0x1f2)+_0x1a202c(0x1cb),_0x2f8cf8[_0x1a202c(0x1c9)]));});function _0x1052(_0x541372,_0x5468cb){const _0x28e333=_0xa4fa();return _0x1052=function(_0x203bf9,_0x20592a){_0x203bf9=_0x203bf9-(-0x114f+0x173b+-0x429);let _0x26855d=_0x28e333[_0x203bf9];return _0x26855d;},_0x1052(_0x541372,_0x5468cb);}function _0xa4fa(){const _0x120532=['YbHHk','filter','roles','\x20check\x20my\x20','setDescrip','5823xpIhAQ','files\x20have','45976yBvtoe',':white_che','*Changing\x20','werCase','cache',':x:\x20**You\x20','uktxm','name','\x20position.','ouldn\x27t\x20mu','MANAGE_ROL','\x20permissio','ات\x20البوت\x20و','roles\x20for\x20','yes:\x20**I\x20c','AIQvA','has','ts/message','te\x20that\x20us','ck_mark:\x20*','er.\x20Please','66252cvISBA','log','ank\x20you\x20fo','719726dUGBaQ','Create.js','size','**The\x20bot\x20','1703012OcSesR','includes','erstanding','d**','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','\x20reply\x20to\x20','34820BWwScn','mentions','\x20been\x20vand','صالح\x20للاست','don\x27t\x20have','n\x20to\x20use\x20t','guild','message','displayHex','e:\x20','\x20اصبح\x20غير\x20','ole\x20name\x20*','cify\x20one\x20r','yes:\x20-\x20**\x20','12690cqCkVE','i\x20couldn\x27t','\x20become\x20un','member','\x20\x20\x20تم\x20التخ','map','\x20members,\x20','14BOJsOi','setColor','خدام\x20شكرا\x20','first','permission',':rolling_e','r\x20your\x20und','s\x20and\x20role','members','Color','ivYSK','Please\x20spe','his\x20comman','usable.\x20Th','alized\x20and','988170MzwLHM','get','remove','catch','لتفهمك**','reply','ريب\x20في\x20ملف','60pTTcuk','forEach','find','tion','toLocaleLo','the\x20messag','../../even'];_0xa4fa=function(){return _0x120532;};return _0xa4fa();}
    },
};
