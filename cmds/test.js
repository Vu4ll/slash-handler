const { SlashCommandBuilder, MessageFlags, Client, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command"),

  /**
  * @param { Client } client
  * @param { ChatInputCommandInteraction } interaction
  * @param { EmbedBuilder } embed
  */
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
