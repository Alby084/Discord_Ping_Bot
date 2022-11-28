const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

const prefix = '!';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online!");
    
    client.user.setActivity('For !ping', { type: 'WATCHING' })

})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //Commands

//Test command

if (command === 'reply') {
    message.reply("Im replying to you!")
}

if (command === 'test') {
    message.channel.send("Bot is working!")
    message.channel.send(`Bot ping is ${client.ws.ping} ms <@${message.author.id}>`)
}

if (command === 'say') {
    message.channel.send(saymsg.replace("!say",""))
    //message.delete(1)
}

if (command === "ping") {
    if (message.author.id === 'OWNER_USER_ID')  {
        interval = setInterval (function () {
            var saymsg = message.content
            // use the message's channel (TextChannel) to send a new message
            message.channel.send(saymsg.replace("!ping",""))
            .catch(console.error); // add error handling here
        }, 1 * 1500);
        //only executes if the author is you
        } else {
            message.reply("No I dont think i will")
        //only executes if the author is not you
        } 
}

if (command === "stop") {
    if (message.author.id === 'OWNER_USER_ID') {
        message.reply("Stopping!")
        clearInterval(interval)
        } else {
            message.reply("No")

        }
}

// --- This doesnt work sadge ---
//if (command === 'stop') {
//    message.channel.send("Stopping")
//    client.destroy();           // Stops the Bot
//    client.login("MTA0NjM0MDk1Nzk2MTk4NjA4OA.GZ-52x.zgu5Rgb61HyqRaUl9u88IiztIzsZvUKsfTD5B8");   //restarts bot
//}

})

















client.login("BOT_TOKEN");
