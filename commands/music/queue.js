 
const player = require("../../client/player");

module.exports = {
    name: "queue",
    description: "Display the queue of the current tracks in the playlist.",
  async execute(client, message, args) {
const _0x8747f0=_0x12bd;(function(_0x2b377f,_0x696203){const _0x5d68aa=_0x12bd,_0x329ab7=_0x2b377f();while(!![]){try{const _0x54f6e6=-parseInt(_0x5d68aa(0xe5))/(0x37*0xb+-0x7f*-0x29+-0x16b3)+parseInt(_0x5d68aa(0xcb))/(-0x1e95+0xb9*0x2+-0x1d25*-0x1)+-parseInt(_0x5d68aa(0xbe))/(0x26d4+0x3*-0x50b+-0x17b0)+-parseInt(_0x5d68aa(0xc9))/(-0x25ad+0x38c*0x8+0x951)+-parseInt(_0x5d68aa(0xdf))/(-0x16*-0x44+-0x189d*0x1+-0x965*-0x2)*(-parseInt(_0x5d68aa(0x106))/(-0x61d+0x2d9*-0x5+-0x20*-0xa3))+parseInt(_0x5d68aa(0xcd))/(-0x3*-0x95d+-0xdbe+-0x11a*0xd)+parseInt(_0x5d68aa(0xfa))/(-0x2148+-0x1a6e*-0x1+0x6e2);if(_0x54f6e6===_0x696203)break;else _0x329ab7['push'](_0x329ab7['shift']());}catch(_0x14c985){_0x329ab7['push'](_0x329ab7['shift']());}}}(_0xae58,0x1f69f+0x1821*-0x37+0x882f0));const {wtf}=require(_0x8747f0(0xfe)+_0x8747f0(0x10a)+_0x8747f0(0xff));function _0xae58(){const _0x487dca=['channel','tag','346172bsisAj','playing','\x20**','ريب\x20في\x20ملف','**The\x20bot\x20','\x20\x20\x20تم\x20التخ','n\x20a\x20voice\x20','ozKDD','\x0a...','erstanding','sign:\x20**Yo','Now\x20Playin','stening\x20in','se\x20that!**','sign:\x20You\x20','reply','must\x20be\x20li','**\x20to\x20use\x20','\x20reply\x20to\x20','\x20[**','join','2473304WvgfUb','\x20use\x20that!',')\x20-\x20','ank\x20you\x20fo','../../even','Create.js','u\x20must\x20joi','current','files\x20have','message','aying\x20to\x20u','RHAwu','409974TjzTEA','خدام\x20شكرا\x20','name','\x20become\x20un','ts/message','voice','صالح\x20للاست','slice','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','ere\x20must\x20b','getQueue','catch','736086gvXiBw','r\x20your\x20und','e\x20music\x20pl','2f3136','member','i\x20couldn\x27t','length','لتفهمك**','giEAh','\x20been\x20vand','usable.\x20Th','832144MMgLXO',':no_entry_','329826DEipgT','Song\x20Queue','1835848ywJvKD','guild','\x20اصبح\x20غير\x20','alized\x20and','.\x20[**','requestedB','**](','that!','e:\x20','ات\x20البوت\x20و','tracks',':notes:\x20\x20|','sign:\x20**Th','the\x20messag','title','channel\x20to','log','\x20more\x20trac','30uYZPho','map','jiOPn','url'];_0xae58=function(){return _0x487dca;};return _0xae58();}if(!wtf)return message[_0x8747f0(0xf4)]({'content':_0x8747f0(0xe9)+_0x8747f0(0x102)+_0x8747f0(0xc7)+_0x8747f0(0xd0)+_0x8747f0(0x109)+_0x8747f0(0xc8)+_0x8747f0(0xfd)+_0x8747f0(0xbf)+_0x8747f0(0xee)+_0x8747f0(0x10e)+_0x8747f0(0xea)+_0x8747f0(0xe8)+_0x8747f0(0xd6)+_0x8747f0(0xcf)+_0x8747f0(0x10c)+_0x8747f0(0x107)+_0x8747f0(0xc5)});if(!message[_0x8747f0(0xc2)][_0x8747f0(0x10b)][_0x8747f0(0xe3)])return message[_0x8747f0(0xf4)]({'content':_0x8747f0(0xca)+_0x8747f0(0xef)+_0x8747f0(0x100)+_0x8747f0(0xeb)+_0x8747f0(0xdc)+_0x8747f0(0xfb)+'**','ephemeral':!![]})[_0x8747f0(0x111)](_0x437d4f=>{const _0xd73cc5=_0x8747f0,_0x311165={'RHAwu':function(_0xcfb976,_0x3e2592){return _0xcfb976+_0x3e2592;}};console[_0xd73cc5(0xdd)](_0x311165[_0xd73cc5(0x105)](_0xd73cc5(0xc3)+_0xd73cc5(0xf7)+_0xd73cc5(0xda)+_0xd73cc5(0xd5),_0x437d4f[_0xd73cc5(0x103)]));});if(message[_0x8747f0(0xce)]['me'][_0x8747f0(0x10b)]?.[_0x8747f0(0xe3)]&&message[_0x8747f0(0xc2)][_0x8747f0(0x10b)][_0x8747f0(0xe3)]['id']!==message[_0x8747f0(0xce)]['me'][_0x8747f0(0x10b)][_0x8747f0(0xe3)]['id'])return message[_0x8747f0(0xf4)]({'content':_0x8747f0(0xca)+_0x8747f0(0xf3)+_0x8747f0(0xf5)+_0x8747f0(0xf1)+_0x8747f0(0xe7)+message[_0x8747f0(0xce)]['me'][_0x8747f0(0x10b)][_0x8747f0(0xe3)][_0x8747f0(0x108)]+(_0x8747f0(0xf6)+_0x8747f0(0xd4)),'ephemeral':!![]})[_0x8747f0(0x111)](_0x507b6a=>{const _0x270c00=_0x8747f0,_0x34f4c9={'ozKDD':function(_0x40948f,_0x10aad5){return _0x40948f+_0x10aad5;}};console[_0x270c00(0xdd)](_0x34f4c9[_0x270c00(0xec)](_0x270c00(0xc3)+_0x270c00(0xf7)+_0x270c00(0xda)+_0x270c00(0xd5),_0x507b6a[_0x270c00(0x103)]));});const queue=player[_0x8747f0(0x110)](message[_0x8747f0(0xce)]['id']);if(!queue?.[_0x8747f0(0xe6)])return message[_0x8747f0(0xf4)]({'content':_0x8747f0(0xca)+_0x8747f0(0xd9)+_0x8747f0(0x10f)+_0x8747f0(0xc0)+_0x8747f0(0x104)+_0x8747f0(0xf2),'ephemeral':!![]})[_0x8747f0(0x111)](_0x521f55=>{const _0x81065f=_0x8747f0,_0x12d821={'giEAh':function(_0x5bb4fc,_0xd341){return _0x5bb4fc+_0xd341;}};console[_0x81065f(0xdd)](_0x12d821[_0x81065f(0xc6)](_0x81065f(0xc3)+_0x81065f(0xf7)+_0x81065f(0xda)+_0x81065f(0xd5),_0x521f55[_0x81065f(0x103)]));});const currentTrack=queue[_0x8747f0(0x101)],tracks=queue[_0x8747f0(0xd7)][_0x8747f0(0x10d)](0x431+-0x263e+-0x17*-0x17b,-0x3*0x975+0x1d93+-0x12a)[_0x8747f0(0xe0)]((_0x2704c0,_0xaac49d)=>{const _0x36b097=_0x8747f0,_0x3637c2={'jiOPn':function(_0x3f2b3e,_0x34a45c){return _0x3f2b3e+_0x34a45c;}};return _0x3637c2[_0x36b097(0xe1)](_0xaac49d,-0x37c*0xb+0x2282*-0x1+0x48d7*0x1)+_0x36b097(0xd1)+_0x2704c0[_0x36b097(0xdb)]+_0x36b097(0xd3)+_0x2704c0[_0x36b097(0xe2)]+_0x36b097(0xfc)+_0x2704c0[_0x36b097(0xd2)+'y'][_0x36b097(0xe4)];});function _0x12bd(_0x291a92,_0x2384f6){const _0x4ea957=_0xae58();return _0x12bd=function(_0x2a7e1a,_0x53c782){_0x2a7e1a=_0x2a7e1a-(-0xcce+-0x102d+0x1*0x1db9);let _0x4ecf32=_0x4ea957[_0x2a7e1a];return _0x4ecf32;},_0x12bd(_0x291a92,_0x2384f6);}return message[_0x8747f0(0xf4)]({'embeds':[{'title':_0x8747f0(0xcc),'description':''+tracks[_0x8747f0(0xf9)]('\x0a')+(queue[_0x8747f0(0xd7)][_0x8747f0(0xc4)]>tracks[_0x8747f0(0xc4)]?_0x8747f0(0xed)+(queue[_0x8747f0(0xd7)][_0x8747f0(0xc4)]-tracks[_0x8747f0(0xc4)]===0x2*0x56+0x53*-0x46+0x1607?queue[_0x8747f0(0xd7)][_0x8747f0(0xc4)]-tracks[_0x8747f0(0xc4)]+(_0x8747f0(0xde)+'k'):queue[_0x8747f0(0xd7)][_0x8747f0(0xc4)]-tracks[_0x8747f0(0xc4)]+(_0x8747f0(0xde)+'ks')):''),'color':_0x8747f0(0xc1),'fields':[{'name':_0x8747f0(0xf0)+'g','value':_0x8747f0(0xd8)+_0x8747f0(0xf8)+currentTrack[_0x8747f0(0xdb)]+_0x8747f0(0xd3)+currentTrack[_0x8747f0(0xe2)]+_0x8747f0(0xfc)+currentTrack[_0x8747f0(0xd2)+'y'][_0x8747f0(0xe4)]}]}]});
    },
};
