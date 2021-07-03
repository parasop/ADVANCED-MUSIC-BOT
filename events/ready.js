module.exports = {
  name: "ready",
  async execute(client) {
    console.log(`[API] ${client.user.username} is ready with ${client.guilds.cache.size} server`);

client.user.setActivity("PARAS DOCS")

  }}