import discord
from discord.ext import commands, tasks

prefix = '!'
intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(command_prefix=prefix, intents=intents)
ping_loops = []


@client.event
async def on_ready():
    print("Bot is online!")
    await client.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name='For !ping'))


@client.command()
async def reply(ctx):
    await ctx.reply("I'm replying to you!")


@client.command()
async def test(ctx):
    await ctx.send("Bot is working!")
    await ctx.send(f"Bot ping is {round(client.latency * 1000)} ms <@{ctx.author.id}>")


@client.command()
async def say(ctx, *, message):
    await ctx.send(message)


@client.command()
async def ping(ctx):
    if ctx.author.id == 'STR-UID-HERE':
        @tasks.loop(seconds=1.5)
        async def ping_loop(message):
            await message.channel.send(message.content.replace("!ping", ""))

        ping_loop.start(ctx.message)
        ping_loops.append(ping_loop)
    else:
        await ctx.reply("No I don't think I will")


@client.command()
async def stop(ctx):
    if ctx.author.id == 'STR-UID-HERE':
        await ctx.reply("Stopping!")
        for loop in ping_loops:
            loop.cancel()
        ping_loops.clear()
    else:
        await ctx.reply("No")

client.run("BOT-TOKEN")
