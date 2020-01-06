const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Bot iniciado correctamente!");
   client.user.setPresence( {
       status: "online",
       game: {
           name: `Saludar a todos`,
           type: "PLAYING"
       }
    });
});
client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('663314097999446026');
   canal.send(`${member.user}, bienvenido a la familia de los zombies :tada: :hugging:!`);

});

client.on('guildMemberRemove',(member) => {
    canal.send(`**${member.username}** se ha ido F :slight_frown:`);
});

var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith("hola")) {
    message.channel.send("Hola " + message.author + " que tal?");
  }
});


client.login("NjYzNTE1MzMyNjg5Nzg4OTQ3.XhOlUA.GTf4MY9iKBPwaXIJ1T6WtCL_ZLM");
