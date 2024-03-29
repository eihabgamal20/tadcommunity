//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { MessageButton, MessageActionRow, MessageEmbed, MessageSelectMenu } = require("discord.js");
const { glob } = require("glob");
const { promisify } = require("util");
const { PREFIX } = require('../../json/config.json');


module.exports = {
    name: "help",
    description: 'Feeling lost?',
    aliases: [],
  async execute(client, message, args) {


        const globPromise = promisify(glob);
        const adminFiles = await globPromise(`${process.cwd()}/commands/admin/**/*.js`);   
        const generalFiles = await globPromise(`${process.cwd()}/commands/general/**/*.js`);   
        const infoFiles = await globPromise(`${process.cwd()}/commands/info/**/*.js`);   
        const ownerFiles = await globPromise(`${process.cwd()}/commands/owner/**/*.js`);    
        const musicFiles = await globPromise(`${process.cwd()}/commands/music/**/*.js`); 
        const activitiesFiles = await globPromise(`${process.cwd()}/commands/activities/**/*.js`); 
        const funFiles = await globPromise(`${process.cwd()}/commands/fun/**/*.js`);
        const gamesFiles = await globPromise(`${process.cwd()}/commands/games/**/*.js`);

       let menu = new MessageSelectMenu()
      .setCustomId(`help_${message.author.id}`)
      .setPlaceholder("Choose a category")
         
      .addOptions([
						{
							label: 'Information',
							description: 'To view the info commands',
							value: 'information',
              emoji: '992056774335135864',
						},
            {
							label: 'Owner',
							description: 'To view the owner commands',
							value: 'owner',
              emoji: '992056774335135864',
            },
            {
							label: 'Admin',
							description: 'To view the admin commands',
							value: 'admin',
              emoji: '992056774335135864',
            },
            {
							label: 'General',
							description: 'To view the general commands',
							value: 'general',
              emoji: '992056774335135864',
            },
             {
							label: 'Activities',
							description: 'To view the Activities commands',
							value: 'activities',
              emoji: '992056774335135864',
            },
            {
							label: 'Games',
							description: 'To view the Games commands',
							value: 'games',
              emoji: '992056774335135864',
            },
            {
							label: 'Fun',
							description: 'To view the FUN commands',
							value: 'fun',
              emoji: '992056774335135864',
            },
            {
							label: 'Music',
							description: 'To view the music commands',
							value: 'music',
              emoji: '992056774335135864',
            },
						{
				  		label: 'Delete list',
			  			description: 'Delete messages list',
				  		value: 'delete',
             emoji:'992056774335135864',
            }])
    
   let row = new MessageActionRow()
      .addComponents([menu]);
  let button = new MessageActionRow()

        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Invite Bot')
  .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`))
    
       .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Server Support')
  .setURL(`https://discord.gg/WxGZK8SsxM`))
      
    let embed = new MessageEmbed()    
      
    .setDescription(`**The bot is programmed by 𝑬𝑳 𝑩𝑶𝑩 البوب#4883**

https://github.com/eihabgamal20`)

      .setImage(`https://media.discordapp.net/attachments/910188125190516820/1062367307566956624/7a1d6bc97d953af3844fe377ffa748b5.png`)

.setColor(message.guild.me.displayHexColor)
      .setTimestamp()
    message.reply({ embeds:[embed], components:[row, button] }).then( msg => {
      let filter = b => b.user.id === message.author.id && b.customId === `help_${message.author.id}`;
      let collector = msg.createMessageComponentCollector({ filter:filter, componentType: 'SELECT_MENU' });
      collector.on("collect", (b) => {
        if(b.values[0] === "admin") {   
      let embed_1 = new MessageEmbed()

        .setAuthor(`Admin Commands:`, client.user.displayAvatarURL({dynamic : true}))
        .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
          
    adminFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${PREFIX}${properties.name}`, `${properties.description}`, true)
        }
    })
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});
        } else if(b.values[0] === "information")
        {
      const { version: djsversion } = require("discord.js");
    const { version } = require("../../package.json");
          let days = Math.floor(client.uptime / 86400000);
          let hours = Math.floor(client.uptime / 3600000) % 24;
          let minutes = Math.floor(client.uptime / 60000) % 60;
          let seconds = Math.floor(client.uptime / 1000) % 60;    
    let embed_1 = new MessageEmbed()

  .setAuthor(`Information Bot:`, client.user.displayAvatarURL({dynamic : true}))  
      
      .setColor(message.guild.me.displayHexColor) 
      
      .setTimestamp()
      
        .addFields([
    {
    name: `Bot:`,
    value: `\`\`\`Version: v${version}
Name: ${client.user.tag}
Id: ${client.user.id}
Users: ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}
Commands: ${client.commands.size}
Guilds Count: ${client.guilds.cache.size.toLocaleString()}
Node.js version: ${process.version}
discord js version: v${djsversion}
Platform: ${process.platform}\`\`\``
},
    {
    name: `Server:`,
    value: `\`\`\`Bot Prefix: ${PREFIX}
Bot Language: English\`\`\``  

}, 
      {
      name: `System:`, 
      value: `\`\`\`Ping: ${client.ws.ping}ms
Uptime: ${seconds}s ${minutes}m ${hours}h ${days}d\`\`\``
}
])
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});
        } else if(b.values[0] === "owner")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`Owner Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
                 
    ownerFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${PREFIX}${properties.name}`, `${properties.description}`, true)
        }
    })
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});    } else if(b.values[0] === "general")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`General Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        generalFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${PREFIX}${properties.name}`, `${properties.description}`, true)
        }
    })
    
    b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});    } else if(b.values[0] === "activities")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`Activities Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        activitiesFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${PREFIX}${properties.name}`, `${properties.description}`, true)
         }
    })


    b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});    } else if(b.values[0] === "games")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`Games Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        gamesFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${PREFIX}${properties.name}`, `${properties.description}`, true)
         }
    })

    
    b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});    } else if(b.values[0] === "fun")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`Fun Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        funFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${PREFIX}${properties.name}`, `${properties.description}`, true)
         }
    })
    
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});  } else if(b.values[0] === "music")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`Music Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        musicFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];


        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${PREFIX}${properties.name}`, `${properties.description}`, true)
        }
    })
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});  } else if(b.values[0] === "delete") {
          msg.delete().catch(err => {});
          message.delete().catch(err => {});
         }
      });
    });
   },
};