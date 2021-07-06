const { Shoukaku } = require('shoukaku');
const LavalinkServers = [{ name: 'my-lavalink-server', host: 'lavalink.parasgaming.repl.co', port: 443, auth: 'youshallnotpass', secure: true }];
const Options = require('../shoukaku-option.js');

class ShoukakuHandler extends Shoukaku {
    constructor(client) {
        super(client, LavalinkServers, Options);

      this.on("ready", async (name, resumed) => {
         console.log(
        `Lavalink Node: ${name} is now connected`,
        `This connection is ${resumed ? "resumed" : "a new connection"}`
      );
   
      
    }
    )
    
    this.on("error", (name, error) =>
    console.log(error)
            // client.channels.cache.get("851034349398917120").send(error)
    );
    this.on("close", (name, code, reason) =>
      console.log(
        `Lavalink Node: ${name} closed with code ${code}`,
        reason || "No reason"
      )
    );
    this.on("disconnected", (name, reason) =>
      console.log(`Lavalink Node: ${name} disconnected`, reason || "No reason")
    );
  }
}

module.exports = ShoukakuHandler;