const { MessageButton, MessageActionRow, MessageEmbed, Client, CommandInteraction } = require("discord.js");
const { glob } = require("glob");
const { promisify } = require("util");
const { prefix } = require('../../json/config.json');

module.exports = {
    name: "help",
    description: 'Feeling lost?',
  async execute(client, interaction) {
        const globPromise = promisify(glob);
        const commandFiles = await globPromise(`${process.cwd()}/commands/music/**/*.js`);
    
        let embed = new MessageEmbed()
          
      .setColor('2f3136')

    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
 embed.addField(`${prefix}${properties.name}`, `${properties.description}`, false)
        }
    });
        
        let row = new MessageActionRow()
        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Invite Bot')
  .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`))

        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Server Support')
  .setURL(`https://discord.gg/developer-tools`))
    
 interaction.reply({embeds: [embed], components: [row], content: `:notes: **Commands: [ ${client.commands.size} ]**` , ephemeral:true })
    },
};