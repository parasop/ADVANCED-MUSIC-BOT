module.exports = {
	name:"pause",
	run : async (client,message,args)=> {

let queue = client.queue.get(message.guild.id)

if(!queue){

	return message.channel.send(`there is nothing playing`)
}

queue.queue.length = 0;
queue.player.setPaused(true);

message.channel.send(`paused`)




	}
}