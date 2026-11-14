# SillyDuckyPins
A silly lil auto pin discord bot :3

![discord.js](https://cdn.jsdelivr.net/gh/JMcrafter26/badges@main/src/assets/built-with/discord-js/cozy.svg)
## Setup
**What you'll need** :
- A discord bot (read [Discord Bot](#discord-bot))
- Node.js (can be downloaded [here](https://nodejs.org/en/download) if you don't have it)

### Discord Bot
> [!NOTE]
>
> If you already have an existin Discord Bot & it's token, ignore the [Creating Steps](#creating-the-bot-d) !
>
> If your bot isn't in the server or if you aren't sure if it has the right permission, follow the [Invite Steps](#inviting-the-bot) :P

#### Creating the bot :D
Go on [Discord's dev portal](https://discord.com/developers/applications), login, and press "**New Application**", name your bot, accept the ToS and press "**Create**".

Click on "**Bot**" on the sidebar on the left.

Scroll down to "**Token**" and press "**Reset Token**", click "**Yes, do it!**", verify with your password or 2FA, click "**Submit**".

You should then see your bot's token appear, press "**Copy**" and write it down somewhere.

#### Inviting the bot
Click on "**Installation**" on the sidebar on the left.

You can disable "**User Install**" in the **Installations Contexts** since the bot wont be useful in DMs but it's not necessary.

Scroll down to **Default Install Settings**

Click on the field under "**Scopes**" in "**Guild Install**".

Add "**bot**"

In the "**Permissions**" field that should appear, add :
- "**Pin Messages**"
- "**Read Message History**"
- "**View Channels**"

Scroll up to "**Install Link**" and copy the link provided.

Open the link & invite your bot to the server.

### Getting the channel ID
You'll need the channel ID of the channel you want to auto pin messages in.

If you already have Developper Mode enabled, you can just right click the channel and press "**Copy Channel ID**" and write it down somewhere.

If you don't have Developper Mode enabled, you can enabled it in :
**Settings** -> **Developer** -> **Developer Mode**
### Setting up the .env
Copy the `example.env` and rename it to "**`.env`**".

Next to "TOKEN = ", put the token you wrote down earlier.

Next to "AUTOPIN_CHANNEL_ID = ", put the channel ID you wrote down earlier.

### Installing the dependencies

Assuming you already have Node.JS

Run `npm i`

Wait for the packages to install.

Once it's done installing everything, run `node index.js` :D

The bot should just run now :3

## Running the bot

Just run `node index.js` :3

## Visual Guide
<details>
    <summary>Visual Guide</summary>
    uhhh too lazy to finish it for now
</details>