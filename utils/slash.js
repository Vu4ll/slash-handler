const slash = {
  register: async (clientId, commands) => {
    const config = require("../config.js");
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v10");

    const rest = new REST({ version: "10" }).setToken(config.TOKEN);

    try {
      await rest
        .put(Routes.applicationCommands(clientId), { body: commands }) // Setting up slash commands
        .then(() => {
          console.log(`Slash commands loaded.`);
        });
    } catch (error) {
      console.error(`Failed to load slash commands. \n${error}`);
    }
  },
};

module.exports = slash;

// Vu4ll
