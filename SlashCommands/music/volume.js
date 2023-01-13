const { QueryType } = require("discord-player");
const player = require("../../client/player");
const { MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
    name: "volume",
    description: "change or check the volume of the current song",
  options: [{
    name: "amount",
    description: "Changes/Shows the current volume.",
    type: 4,
    required: false
  }],
  async execute(client, interaction) {
                if (!interaction.member.voice.channel)
            return interaction.reply({  content: ":no_entry_sign: **You must join a voice channel to use that!**", ephemeral:true  });
    
        if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return interaction.reply({  content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`, ephemeral:true  })
    
        const volumePercentage = interaction.options.getInteger("amount");
        const queue = player.getQueue(interaction.guild.id);
    
        if (!queue?.playing)
            return interaction.reply({  content: ":no_entry_sign: **There must be music playing to use that!**", ephemeral:true   });

        if (!volumePercentage)
            return interaction.reply({  content: `:loud_sound: **Volume: \`${queue.volume}\`**`, ephemeral:true  });
    
        if (volumePercentage < 0 || volumePercentage > 150)
              return interaction.reply({  content: ":no_entry_sign: **Volume must be a valid integer between 0 and 150!**", ephemeral:true  });
    
        interaction.reply({  content: `:loud_sound: **Volume changed from \`${queue.volume}\` to \`${volumePercentage}\`**`  });
        queue.setVolume(volumePercentage);
    },
};
