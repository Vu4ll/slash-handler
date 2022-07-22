module.exports = {
  event: "ready",
  run: async (client) => {
    require("../utils/command")(client);
  },
};

// Vu4ll
