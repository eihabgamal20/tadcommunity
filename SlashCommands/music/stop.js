const { QueryType } = require("discord-player");
const player = require("../../client/player");
const { MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
    name: "stop",
    description: "Stop the current song and clears the entire music queue.",
    async execute(client, interaction) {


                if (!interaction.member.voice.channel)
            return interaction.reply({  content: ":no_entry_sign: **You must join a voice channel to use that!**", ephemeral:true  });
        
    
       const queue = player.getQueue(interaction.guild.id);
        if (!queue?.playing)
            return interaction.reply({  content: ":no_entry_sign: **There must be music playing to use that!**", ephemeral:true  });

        
        if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return interaction.reply({  content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`, ephemeral:true  })
        
        queue.stop();
        return interaction.reply({ content: ":notes: **The player has stopped and the queue has been cleared.**" });
    },
};
