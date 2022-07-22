const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command"),

  run: async (client, interaction, embed) => {
    interaction.reply({
      embeds: [embed.setTitle(`It's working!`)],
      ephemeral: true,
    });
  },
};

// Vu4ll
