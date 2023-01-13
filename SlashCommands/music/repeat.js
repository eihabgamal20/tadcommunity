const { QueryType } = require("discord-player");
const player = require("../../client/player");
const { MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
    name: "repeat",
    description: "Toggles the repeat mode.",
      async execute(client, interaction) {
                if (!interaction.member.voice.channel)
            return interaction.reply({  content: ":no_entry_sign: **You must join a voice channel to use that!**", ephemeral:true  });
        
        if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return interaction.reply({  content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`, ephemeral:true  })
        
        const queue = player.getQueue(interaction.guild.id);
        if (!queue?.playing)
            return interaction.reply({  content: ":no_entry_sign: **There must be music playing to use that!**", ephemeral:true  });
       if (queue.repeatMode == 0) {
        queue.setRepeatMode(1);
        interaction.reply({ content: ":notes: Repeat Mode: **ON**" });
       } else {
        queue.setRepeatMode(0);
        interaction.reply({ content: ":notes: Repeat Mode: **OFF**" });
       }
    },
};
