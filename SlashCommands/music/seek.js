const { QueryType } = require("discord-player");
const player = require("../../client/player");
const { MessageEmbed, CommandInteraction } = require('discord.js')
const ms = require("ms");
const db = require('quick.db')

module.exports = {
  name: "seek",
  description: "Seeks to a certain point in the current track.",
  options: [{
    name: "position",
    description: "The position you want to seek to.",
    type: 3,
    required: true
  }],
  async execute(client, interaction) {

        if (!interaction.member.voice.channel)
            return interaction.reply({  content: ":no_entry_sign: **You must join a voice channel to use that!**", ephemeral:true  });

    if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
      return interaction.reply({
        content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`, ephemeral:true  })

    const queue = player.getQueue(interaction.guild.id);
    if (!queue?.playing)
      return interaction.reply({  content: ":no_entry_sign: **There must be music playing to use that!**", ephemeral:true  })
    
  const positionTrack = interaction.options.getString("position");
    if (!positionTrack) return interaction.reply({  content: `:rolling_eyes: - Example **\`/seek 1m\`**`, ephemeral:true })
    
       await queue.seek(ms(positionTrack));
    interaction.reply({ content: `:notes: **Seeked to ${positionTrack}**`});
  },
};