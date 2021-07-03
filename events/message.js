
const {MessageEmbed} = require("discord.js")
const discord  = require("discord.js")
module.exports = {
  name: "message",
  async execute(client,message) {
  0	
  	
 let prefix = client.config.prefix;  
 
if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  
  if (!command) return;

  //-------------------------------------------- P E R M I S S I O N -------------------------------------------



  
  if (command) command.run(client, message, args);
 
}}