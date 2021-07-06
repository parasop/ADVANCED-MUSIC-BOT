module.exports = {
	name:"resume",
	run : async (client,message,args)=> {

let queue = client.queue.get(message.guild.id)

if(!queue){

	return message.channel.send(`there is nothing playing`)
}

queue.queue.length = 0;
queue.player.setPaused(false);

message.channel.send(`resumed`)




	}
}