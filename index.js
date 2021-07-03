const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});

const ShoukakuHandler = require('./shoukaku/ShoukakuHandler.js');
const Queue = require('./shoukaku/Queue.js');







client.shoukaku = new ShoukakuHandler(client);
client.queue = new Queue(client);
client.config = require("./config.json")

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "event"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


process.on('unhandledRejection', console.error)




client.login(client.config.TOKEN);