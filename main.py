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
    async def ping_loop():
        await ctx.send(ctx.message.content.replace("!ping", ""))

    ping_loop_task = tasks.loop(seconds=1.5)(ping_loop)
    ping_loop_task.start()
    ping_loops.append(ping_loop_task)


@client.command()
async def stop(ctx):
    for loop in ping_loops:
        loop.cancel()
    ping_loops.clear()
    await ctx.reply("Stopped.")

client.run("MTA0NjM0MDk1Nzk2MTk4NjA4OA.GwBPEp.apfoWlfJdABWRyRL3dF47MhxFi4LPQ5dmBogoM")
