 
const player = require("../../client/player");
const { PREFIX } = require('../../json/config.json');

module.exports = {
    name: "pause",
    description: "Pauses the currently playing track.",
  async execute(client, message, args) {

  const _0x460079=_0x489d;(function(_0x58d5d8,_0x252108){const _0x1ad613=_0x489d,_0x56616e=_0x58d5d8();while(!![]){try{const _0x40da55=parseInt(_0x1ad613(0x1bc))/(-0x826+-0x3*0x445+-0xa7b*-0x2)+parseInt(_0x1ad613(0x1d1))/(0x20*-0xa9+0x146e+0xb4)*(parseInt(_0x1ad613(0x1e1))/(0x1d5a+-0x116f+-0xbe8))+-parseInt(_0x1ad613(0x1ba))/(0x228f+0x42a+-0x26b5)*(-parseInt(_0x1ad613(0x1d3))/(0x23ca+0x168d+-0x3a52))+-parseInt(_0x1ad613(0x1e2))/(0x2d*-0x5+-0x13d+0x1*0x224)+parseInt(_0x1ad613(0x1ce))/(-0x103f+-0x1112+0xb*0x308)+-parseInt(_0x1ad613(0x1f2))/(-0x15*0x80+0x1475+-0x79*0x15)*(parseInt(_0x1ad613(0x1e5))/(0x3f*-0x70+0xa50+-0x19*-0xb1))+parseInt(_0x1ad613(0x1b3))/(0x24cb+0xebb+-0x5*0xa4c);if(_0x40da55===_0x252108)break;else _0x56616e['push'](_0x56616e['shift']());}catch(_0x38376d){_0x56616e['push'](_0x56616e['shift']());}}}(_0x40f8,0x762ad*-0x1+-0x1e975+0xdb2b8));function _0x489d(_0x108d9d,_0x3d8c39){const _0x1db785=_0x40f8();return _0x489d=function(_0x32f7c1,_0x3d7815){_0x32f7c1=_0x32f7c1-(0xae5*0x1+-0x64*-0x37+-0x1eb4);let _0x1e1c9c=_0x1db785[_0x32f7c1];return _0x1e1c9c;},_0x489d(_0x108d9d,_0x3d8c39);}const {wtf}=require(_0x460079(0x1dc)+_0x460079(0x1c9)+_0x460079(0x1af));function _0x40f8(){const _0x553c04=['ts/message','ank\x20you\x20fo','ريب\x20في\x20ملف','that!','e\x20music\x20pl','186592pseBcp','sign:\x20**Yo','ere\x20must\x20b','36546LSNCgV','voice','1865ysFIrg','i\x20couldn\x27t','e:\x20','**\x20to\x20use\x20','sign:\x20**Th','log','لتفهمك**','used\x20**','صالح\x20للاست','../../even','the\x20messag','channel','must\x20be\x20li','\x20been\x20vand','24jDnRio','1891272jHDxUU','ات\x20البوت\x20و','\x20unpause!','18kZFMwo','channel\x20to','r\x20your\x20und','rLbuQ','\x20reply\x20to\x20','n\x20a\x20voice\x20','**The\x20bot\x20','\x20use\x20that!','u\x20must\x20joi','se\x20that!**','playing',':no_entry_','title','1301704VYiJVj','خدام\x20شكرا\x20','current','OBncL','usable.\x20Th','aying\x20to\x20u','Create.js','files\x20have','\x20**','catch','2860040NRmcHj','\x20become\x20un','guild','reply','resume`\x20to','sign:\x20You\x20','member','3412nazCLr',':notes:\x20Pa','152031IcLJSb','setPaused','\x20اصبح\x20غير\x20','stening\x20in','name','message','erstanding','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','alized\x20and','**.\x20Type\x20`','EegJq','\x20\x20\x20تم\x20التخ','getQueue'];_0x40f8=function(){return _0x553c04;};return _0x40f8();}if(!wtf)return message[_0x460079(0x1b6)]({'content':_0x460079(0x1eb)+_0x460079(0x1b0)+_0x460079(0x1e0)+_0x460079(0x1c4)+_0x460079(0x1b4)+_0x460079(0x1ad)+_0x460079(0x1ca)+_0x460079(0x1e7)+_0x460079(0x1c2)+_0x460079(0x1c3)+_0x460079(0x1c7)+_0x460079(0x1cb)+_0x460079(0x1e3)+_0x460079(0x1be)+_0x460079(0x1db)+_0x460079(0x1f3)+_0x460079(0x1d9)});if(!message[_0x460079(0x1b9)][_0x460079(0x1d2)][_0x460079(0x1de)])return message[_0x460079(0x1b6)]({'content':_0x460079(0x1f0)+_0x460079(0x1cf)+_0x460079(0x1ed)+_0x460079(0x1ea)+_0x460079(0x1e6)+_0x460079(0x1ec)+'**','ephemeral':!![]})[_0x460079(0x1b2)](_0x5b07e4=>{const _0x16b9b9=_0x460079,_0x649d23={'rLbuQ':function(_0x2821cf,_0x591aa2){return _0x2821cf+_0x591aa2;}};console[_0x16b9b9(0x1d8)](_0x649d23[_0x16b9b9(0x1e8)](_0x16b9b9(0x1d4)+_0x16b9b9(0x1e9)+_0x16b9b9(0x1dd)+_0x16b9b9(0x1d5),_0x5b07e4[_0x16b9b9(0x1c1)]));});if(message[_0x460079(0x1b5)]['me'][_0x460079(0x1d2)]?.[_0x460079(0x1de)]&&message[_0x460079(0x1b9)][_0x460079(0x1d2)][_0x460079(0x1de)]['id']!==message[_0x460079(0x1b5)]['me'][_0x460079(0x1d2)][_0x460079(0x1de)]['id'])return message[_0x460079(0x1b6)]({'content':_0x460079(0x1f0)+_0x460079(0x1b8)+_0x460079(0x1df)+_0x460079(0x1bf)+_0x460079(0x1b1)+message[_0x460079(0x1b5)]['me'][_0x460079(0x1d2)][_0x460079(0x1de)][_0x460079(0x1c0)]+(_0x460079(0x1d6)+_0x460079(0x1cc)),'ephemeral':!![]})[_0x460079(0x1b2)](_0x536786=>{const _0x4e9101=_0x460079,_0x25cb28={'OBncL':function(_0x207809,_0x30eb2a){return _0x207809+_0x30eb2a;}};console[_0x4e9101(0x1d8)](_0x25cb28[_0x4e9101(0x1f5)](_0x4e9101(0x1d4)+_0x4e9101(0x1e9)+_0x4e9101(0x1dd)+_0x4e9101(0x1d5),_0x536786[_0x4e9101(0x1c1)]));});const queue=player[_0x460079(0x1c8)](message[_0x460079(0x1b5)]['id']);if(!queue?.[_0x460079(0x1ef)])return message[_0x460079(0x1b6)]({'content':_0x460079(0x1f0)+_0x460079(0x1d7)+_0x460079(0x1d0)+_0x460079(0x1cd)+_0x460079(0x1ae)+_0x460079(0x1ee),'ephemeral':!![]})[_0x460079(0x1b2)](_0x504239=>{const _0x2080fd=_0x460079,_0x3aade6={'EegJq':function(_0x104c2d,_0x346b78){return _0x104c2d+_0x346b78;}};console[_0x2080fd(0x1d8)](_0x3aade6[_0x2080fd(0x1c6)](_0x2080fd(0x1d4)+_0x2080fd(0x1e9)+_0x2080fd(0x1dd)+_0x2080fd(0x1d5),_0x504239[_0x2080fd(0x1c1)]));});queue[_0x460079(0x1bd)](!![]);return message[_0x460079(0x1b6)]({'content':_0x460079(0x1bb)+_0x460079(0x1da)+queue[_0x460079(0x1f4)][_0x460079(0x1f1)]+_0x460079(0x1c5)+PREFIX+(_0x460079(0x1b7)+_0x460079(0x1e4)),'ephemeral':!![]});
    },
};
