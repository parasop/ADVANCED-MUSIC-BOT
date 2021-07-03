const { MessageEmbed } = require("discord.js");
const delay = require("delay");
const ms = require("ms");

function checkURL(string) {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
  name: "play",
  
  run: async (client, message, args) => {

	  let voice = message.member.voice

	  if(!voice){
		  message.channel.send(`join a voice channe;`)
	  }
    const msg = message;
    if (!args[0])
      return await message.channel.send(
        "you did not specify a link or search mode");
    const node = client.shoukaku.getNode();
    const query = args.join(" ");
    if (checkURL(query)) {
      const result = await node.rest.resolve(query);
      if (!result)
        return await message.channel.send(
          "I didn't find anything in the query you gave me");
      const { type, tracks, playlistName } = result;
      const track = tracks.shift();
      const isPlaylist = type === "PLAYLIST";
      const res = await this.client.queue.handle(node, track, msg);
      if (isPlaylist) {
        for (const track of tracks) await client.queue.handle(node, track, msg);
      }

      let embed = new MessageEmbed()
        .setTitle(
          `` + isPlaylist
            ? `Added The Playlist`
            : `Added The Track`
        )
        .setColor(`#FF000`)
        .setDescription(isPlaylist ? playlistName : track.info.title);
      await msg.channel.send(embed).catch(() => null);
      if (res) await res.play();
      return;
    }
    const searchData = await node.rest.resolve(query, "youtube");
    if (!searchData.tracks.length)
      return await message.channel.send(
        "I didn't find anything in the query you gave me");
    const track = searchData.tracks.shift();
    const res = await client.queue.handle(node, track, msg);

    let embed = new MessageEmbed()
      .setTitle(`<:emoji_100:851339551371689984> Added To Queue`)
      .setColor("#FF0000")
      .setDescription(`${track.info.title}`);
    await msg.channel.send(embed).catch(() => null);
    if (res) await res.play();
  }
};