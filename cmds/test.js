const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command"),

  run: async (client, interaction, embed) => {
    interaction.reply({
      embeds: [
        embed.setTitle(`It's working!`)
      ],
      flags: MessageFlags.Ephemeral,
    });
  },
};

// Vu4ll
