const discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'The ping Command',
  category: 'Info',
  aliases: ['pong'],
  run: async (client, message, args) => {
    
    message.channel.send(`Pinging...`).then(m => {
      
      let ping = m.createdTimestamp - message.createdTimestamp;
      
      let embed = new discord.MessageEmbed()
      .setColor("FF000")
      .setAuthor(`pong`,message.author.displayAvatarURL())
    
    .setDescription(`
 \`\`\`Gateway ping : ${client.ws.ping}ms
Rest ping    : ${ping}ms
Websocket    : ${message.guild.shard.ping}ms \`\`\`
    `)
      m.edit('', embed);
    })
  }
}
