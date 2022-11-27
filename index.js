const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

const prefix = '!';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity(`Ping Pong`, { type: "WATCHING" });

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

if (command === 'test') {
    message.channel.send("Bot is working!")
}

if (command === 'reply') {
    message.reply("Im replying to you!")
}

if (command === 'ping') {
    message.channel.send(`Bot ping is ${client.ws.ping} ms <@${message.author.id}>`)
}

if (command === 'say') {
    let saymsg = message.content
    message.channel.send(saymsg.replace("!say",""))
    //message.delete(1)
}

if (command === 'ping10') {
    i = 1
    let saymsg = message.content
    while (i < 11) {
        message.channel.send(saymsg.replace("!ping10","" + i))
        i++
    }
}

if (command === 'ping20') {
    i = 1
    let saymsg = message.content
    while (i > 0) {
        message.channel.send(saymsg.replace("!ping20","" + i))
        i++
        if (command === 'stop20')
        i = 25
    }
}







})

















client.login("BOT_TOKEN");