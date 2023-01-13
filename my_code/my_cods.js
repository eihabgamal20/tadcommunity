//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 
const Discord = require('discord.js');
const { Client, Intents, Collection, MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');
const { PREFIX, ROLE, GUILD  } = require('../json/config.json');
let prefix = PREFIX
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    
// set your code bro here




const db = require('pro.db'); // npm install pro.db
client.on('messageCreate', message => {
        if(message.content.startsWith(prefix + "antilink-on")) {
                if(db.get(`link_${message.guild.id}`) === "on") return message.reply("منع اللينكات مفعلة اصلا")
                if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("ما عندك صلاحيه")
                db.set(`link_${message.guild.id}`,'on')
                        return message.reply("**تم تفعيل الحماية من اللينكات ✅**")
                  
}

        if(message.content.startsWith(prefix + "antilink-off")) {
                if(db.get(`link_${message.guild.id}`) === "off") return message.reply("منع اللينكات غير مفعلة اصلا")
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("ما عندك صلاحيه")
                        db.set(`link_${message.guild.id}`,'off')
                                return message.reply("** تم اطفاء الحماية من اللينكات ✅ **")
}
});



      
client.on('messageCreate', message => {
        let link = [`https://`,`discord.gg/`];
        let dj = db.get(`link_${message.guild.id}`)
        if (link.includes(message.content)) {
                if(!message.member.permissions.has("MANAGE_MESSAGES")) {                      
                        if(dj === "off") return;
                        if(dj === "on") {

        }
            message.delete()
                }
        }
});
      
      //////////////////////////////////////////////////////////////////////////stop
client.on("messageCreate", message => {
        if(message.content.startsWith(prefix + 'info')) {
        message.delete()
const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(`https://media.discordapp.net/attachments/1015021247446405130/1022223891239796746/png_20220901_230019_0000-01.jpg`) // رابط الخط حق سيرفرك 
        .setDescription("حط اي ديسكربشن")
        .setThumbnail(`${message.guild.iconURL({ dynamic: true})}`)
        .setAuthor(`المعلومات`, `${message.guild.iconURL({ dynamic: true})}`)
let row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('Get Start')                  
        .setLabel('لنبدا')             
        .setStyle("SUCCESS"),            
        new MessageButton()
        .setCustomId('rules')                   
        .setLabel('القوانين')
        .setStyle("DANGER"),         
        new MessageButton()
        .setCustomId('رول')                   
        .setLabel('لاختيار الرتب')
        .setStyle("PRIMARY"),   
        new MessageButton()
        .setCustomId('suss🤯')                   
        .setLabel('مهم')
        .setStyle("PRIMARY"),   
      )
      message.channel.send({ embeds: [embed], components: [row]});
  }
});
let r1 = "1056105859689754695" // ايدي رول الاولة
let r2 = "1056106939215511552" // ايدي رول ثانية
let r3 = "1056145949979852841" // ايدي رول ثالثة
let r4 = "1056146778463932466" // ايدي رول رابعة
 
 
         client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'Get Start') {
            const momn = new MessageEmbed()
            .setDescription("استبدل هاذي الكتابه ب معلومات عن السيرفر")
            .setColor("RANDOM")
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`لنبدا`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn], ephemeral : true});
  }
})
                 client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'rules') {
            const momn2 = new MessageEmbed()
            .setDescription("استبدل هاذي الكتابه ب قوانين سيرفرك")
            .setColor("RANDOM")
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`القوانين`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn2], ephemeral : true});
  }
})
 
 
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
                             if (interaction.customId === 'رول') {
                                     let er = new MessageEmbed()
                                     .setDescription(`اكتب اي حاجه`) 
                                     .setAuthor(`اختيار الرتب`, `${interaction.guild.iconURL({ dynamic: true})}`)
                                  let ro = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('rol')                  
        .setLabel('اسم الرول الاوله')             
        .setStyle("SECONDARY"),            
        new MessageButton()
        .setCustomId('role2')                   
        .setLabel('اسم الرول الثانيه')
        .setStyle("SECONDARY"),         
        new MessageButton()
        .setCustomId('role3')                   
        .setLabel('اسم الرول الثالثه')
        .setStyle("SECONDARY"),   
        new MessageButton()
        .setCustomId('role4')                   
        .setLabel('اسم الرول الرابعه')
        .setStyle("SECONDARY"),   
      )   
interaction.reply({embeds: [er], components: [ro], ephemeral: true})
                             }
})
 
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'rol') {
         if(!interaction.member.roles.cache.has(r1)) {
            interaction.member.roles.add(r1)
            interaction.reply({content: `**✅ Add <@&${r1}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r1)) {
            interaction.member.roles.remove(r1) 
            interaction.reply({content: `**✅ Remove <@&${r1}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role2') {
         if(!interaction.member.roles.cache.has(r2)) {
            interaction.member.roles.add(r2)
            interaction.reply({content: `**✅ Add <@&${r2}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r2)) {
            interaction.member.roles.remove(r2) 
           interaction.reply({content: `**✅ Remove <@&${r2}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role3') {
         if(!interaction.member.roles.cache.has(r3)) {
            interaction.member.roles.add(r3)
            interaction.reply({content: `**✅ Add <@&${r3}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r3)) {
            interaction.member.roles.remove(r3) 
            interaction.reply({content: `**✅ Remove <@&${r3}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;
    if (interaction.customId === 'role4') {
         if(!interaction.member.roles.cache.has(r4)) {
            interaction.member.roles.add(r4)
            interaction.reply({content: `**✅ Add <@&${r4}>**`, ephemeral: true, fetchReply: true});
        }
        if (interaction.member.roles.cache.has(r4)) {
            interaction.member.roles.remove(r4) 
            interaction.reply({content: `**✅ Remove <@&${r4}>**`, ephemeral: true, fetchReply: true});
        }
    }
});
 
 
client.on('interactionCreate', async interaction => {    if (interaction.customId === 'suss🤯') {
            const momn3 = new MessageEmbed()
            .setDescription("استبدل هاذي الكتابه ب اشياء مهمه")
            .setColor("RANDOM")
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
            .setAuthor(`مهم`, `${interaction.guild.iconURL({ dynamic: true})}`)
          interaction.reply({ embeds: [momn3], ephemeral : true});
  }
})











client.on('ready', () => {
  

  const log = client.channels.cache.get("910188126792716289")////ايدي شانل اللوج 

  let start = new MessageEmbed()
    .setColor('2F3136')
    .setAuthor(log.guild.name, log.guild.iconURL({ dynamic: true }))
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`> ━━━━━━◥◣◆◢◤━━━━━━
> **Bot is online** 
> **the bot is Ready ABO.FARGHALY**
> **[ID] ${client.user.id}**
> **[USERS] : [" ${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()} "]**
> **Channels : [ " ${client.channels.cache.size} " ]** 
`)
  log.send({ embeds: [start] })
});




////////////////////////////////////////////////
client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith (prefix+"setavatar")) {
if (!ownerID.includes(message.author.id)) return;
let avLink = message.content.substr(`${prefix}setavatar `.length);
if (!avLink) return message.channel.send("**Incorrect Link,Please Put Avatar Link!**");
    client.user.setAvatar(avLink).then(()=>{
message.delete()
message.channel.send('**Bot Avatar Has Been Changed ✅**')
      
    }).catch( ()=> {
message.channel.send('**Error Try Again Later! 🚫 : Incorrect Link Or Ratelimit**')
    })
  }
})
///////////////////////////////////////


      
    
      
      
      
      /////////////////////
      
      

      
      
      
      

  }
}
//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 