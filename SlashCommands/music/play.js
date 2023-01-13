const { QueryType } = require("discord-player");
const player = require("../../client/player");
const { MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
    name: "play",
    description: ":notes: Add a song to queue and plays it.",
  options: [{
    name: "song",
    description: "Add music url or name.",
    type: 3,
    required: true
  }],
  async execute(client, interaction) {
        const songTitle = interaction.options.getString("song");

        if (!interaction.member.voice.channel)
            return interaction.reply({  content: ":no_entry_sign: **You must join a voice channel to use that!**", ephemeral:true });
    
        if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return interaction.reply({  content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`, ephemeral:true })
    
        const queue = await player.createQueue(interaction.guild, {
        leaveOnEnd: false,
        leaveOnStop: false,
        channelEmpty: true,
      metadata: {
        channel: interaction.channel,
        voice: interaction.member.voice.channel
            }
        });
        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            queue.destroy();
      return await interaction.reply({ content: `:rolling_eyes: **Couldn't join your voice channel!**`, ephemeral:true  })
        }
    
        interaction.reply({ content: `:watch: Searching ... (\`${songTitle}\`)`, fetchReply: true }).then(async m => {
            const searchResult = await player.search(songTitle, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO,
        });
            if (!searchResult.tracks.length) return m.edit({content: `**:mag: Not found.**`})
            m.edit({content: `:notes: **${searchResult.tracks[0].title}** Added to **Queue** (${searchResult.tracks[0].duration})!`})
            searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0]);

        if (!queue.playing) await queue.play() || queue.setVolume(85);
        })
    },
};
