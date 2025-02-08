const { SlashCommandBuilder, Client, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName() // Command name
    .setDescription(), // Command description
  // For more options: https://discordjs.guide/interactions/slash-commands.html#parsing-options

  /**
   * @param { Client } client 
   * @param { ChatInputCommandInteraction } interaction 
   * @param { EmbedBuilder } embed 
   */
  run: async (client, interaction, embed) => {
    // Code here
  },
};

// Vu4ll
