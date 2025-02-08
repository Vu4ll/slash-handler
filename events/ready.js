const { Client } = require("discord.js");

module.exports = {
  event: "ready",

  /**
   * @param { Client } client 
   */
  run: async (client) => {
    require("../utils/command")(client);
  },
};

// Vu4ll
