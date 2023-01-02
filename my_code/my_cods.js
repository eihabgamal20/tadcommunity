//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { Client, Intents, Collection, MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');
const { PREFIX, ROLE, GUILD  } = require('../json/config.json');
let prefix = PREFIX
module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    
// set your code bro here




client.on('ready', () => {
console.log(`${client.user.tag}`)
 client.user.setActivity(`${prefix}help`, { type: 'STREAMING', url: 'https://www.twitch.tv/turbo' })  
});






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





client.on("messageCreate", async (messageCreate) => {
if(messageCreate.content.startsWith("https://") || messageCreate.content.startsWith("discord.gg") || messageCreate.content.startsWith("www")){
 messageCreate.delete()
let msgg = new MessageEmbed()
.setTitle("**تحذير ارسال رابط**")
.setDescription(`🔴ممنوع ارسال الروابط يا حبيبي
- <@${messageCreate.author.id}>
`)
let msg = await messageCreate.channel.send({embeds:[msgg]})
setTimeout(() => {
  msg.delete()
}, 5800)               
    }
});


client.on("message", message=>{
 if(message.author.bot) return;
 if(message.content.startsWith(prefix+"setn")){
 let nick = message.content.slice((prefix+"setn").length)
 if(!nick) return message.channel.send("اكتب الاسم بعد الامر")
 
 message.guild.members.cache.forEach(r=>r.setNickname(nick + r.user.username))
 
 message.channel.send("** تم تغيير جميع اسماء الاعضاء ** ✅");
    } 
 })


client.on('messageCreate', message => {
        if(message.content.toLowerCase().startsWith(prefix + 'setactivity')) {
                const owner = ['565931144428781579'] // ايدي الي يقدر يغير الحاله تقدر تسوي اكثر من ايدي
                if (!owner.includes(message.author.id)) return;
                const oy = message.content.split(" ").slice(1).join(" ");
                if(!oy) return message.reply("اكتب حاله جديده يا معلم")
                client.user.setPresence({ activities: [{ name: oy }], status: 'online' }); return message.reply(`** done set bot Presence to ${oy} ** `) 
        }
});





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







    const { WebhookClient } = require("discord.js")
const log = new WebhookClient({ url: 'https://discord.com/api/webhooks/1058952820604276848/8LCjfJ0crCVUYOlo8z4t0XTrLdMSbMeves_8fn04u4WXucDRQN062qGqxi16k4qZ7okP' });

client.on('messageUpdate', (oldMessage, newMessage) => {

const embed = new MessageEmbed()
    .setTitle('Message Edit ✍️')
        .setDescription(` Message Sent By: <@${oldMessage.author.id}> Edit In: <#${oldMessage.channel.id}> [jump to  message](https://discord.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id})\n \n **old** \n \`\`\`\ ${oldMessage} \`\`\`\  \n **new** \`\`\`\ ${newMessage} \`\`\`\ `)
        .setColor('RANDOM')
             .setAuthor(`${oldMessage.author.tag}`, oldMessage.author.displayAvatarURL({ dynamic: true }))
        .setFooter(`${oldMessage.guild.name}`, `${oldMessage.guild.iconURL({ dynamic: true})}`)
        .setTimestamp()
                                                                                                                                                        

log.send({
    embeds: [embed],
});
});

      
      

      
      
      
      const { DiscordTogether } = require('discord-together'); //npm install discord-together

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => {
        if(message.content.toLowerCase().startsWith(prefix + 'youtube')) {
    
       if (message.author.bot) return;
        if(!message.member.voice.channel) return message.reply("ادخل فويس الاول!")
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                    let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('watch')
      .setURL(`${invite.code}`))
                    let normal = new MessageEmbed()

                            .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true})}`)
                    .setColor('RANDOM')
                    .setDescription(`[click here to watch together!](${invite.code})`)                    .setImage(`https://cdn.discordapp.com/attachments/988971457772154911/1045958161854636062/1366_2000.jpg`)
                       .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                return message.reply({embeds: [normal], components: [button]})
            });
        };
    };
});
      
      
      
      client.on('ready', () => {
  

  const log = client.channels.cache.get("910188125190516820")////ايدي شانل اللوج 

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
      
      
      
      
      
      

      
      //discord.js and client declaration
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('messageCreate', message => {
    client.channels.fetch("1052266151612272640") 
    if(message.content === '!join') {
      if(message.member.voice.channel){
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
      } else {
          message.reply("🚫| please join some voice channel")
     }
    }
})

      
      
      
      
  }
}
//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 