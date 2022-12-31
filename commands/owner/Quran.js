const { Client, CommandInteraction, EmbedBuilder } = require("discord.js");
module.exports = {
   name: "quran",
   description: "Quran ☪️",
   type: "CHAT_INPUT",
   options: [{
    name: "page",
   
    type: "NUMBER",
    description: "Select a user",
    required: true
},
{
    name:"type",
    description:"Quran Print Style",
    type:3,
    required:true,
    choices:[
        {
            name:"مصحف المدينة المنورة",
            value:"1"
            
          },
          {
            name:"القرآن الكريم مصورا من المصحف",
            value:"6"
            
        
          },
         
    ],
  },
], 
   run: async (client, interaction, args) => {
    const number = interaction.options.getNumber('page');
    const type = interaction.options.getString("type");
   
    
    if (number > 604) {
        interaction.followUp({ content: `**يحتوي المصحف علي 604 صفحه فقط**` });
         return;
      }
if (number < 0) {
        interaction.followUp({ content: `**يبدء المصحف من صفحه 0 الي 604**` });
         return;
      }
     
      
    
      const Build = new EmbedBuilder()
      .setColor('RED')
      .setTitle('**Quran ☪️**')
      .setFooter("By Abdalla Ahmed 👑#5697")
      .setImage(`http://www.islamicbook.ws/${type}/${number}.png`)
      interaction.followUp({embeds: [Build]})
    
    
      
   },
};
  