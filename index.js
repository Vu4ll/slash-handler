const { Client, Partials, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({
  intents: Object.values(GatewayIntentBits).filter(
    (x) => typeof x === "string"
  ),
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction,
    Partials.User,
  ],
  presence: {
    activities: [
      {
        name: `with slash commands.`,
        type: `PLAYING`,
      },
    ],
    status: "idle",
  },
});
const fs = require("fs");
require("./utils/event.js")(client);

global.client = client;
client.commands = new Collection();

client
  .login(process.env.TOKEN)
  .then(() => console.log(`${client.user.username} is ready!`))
  .catch((err) => console.error(`Failed to login! \n${err}`));

// Vu4ll
