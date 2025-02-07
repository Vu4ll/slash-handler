const config = require("./config.js");
const { Client, Collection } = require("discord.js");
const client = new Client({
  intents: config.CLIENT.intents,
  partials: config.CLIENT.partials,
});

require("./utils/event.js")(client);

global.client = client;
client.commands = new Collection();

client
  .login(config.TOKEN)
  .then(() => console.log(`${client.user.username} is ready!`))
  .catch((err) => console.error(`Failed to login! \n${err}`));

// Vu4ll
