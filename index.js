const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
require("dotenv").config();

const token = process.env.TOKEN;
const autoPinChannelID = process.env.AUTOPIN_CHANNEL_ID;

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const allowedMsgTypes = [0, 19];

client.once("clientReady", async () => {
    console.log(`🦆 Logged in as ${client.user.tag} :3`);

    client.user.setPresence({
        status: "dnd",
        activities: [
            {
                name: "Pins :3",
                type: ActivityType.Listening,
            },
        ],
    });
});

client.on("messageCreate", async (msg) => {
    if (msg.channelId = autoPinChannelID && allowedMsgTypes.includes(msg.type)) {
        // console.log(msg.type);
        msg.pin();
    }
});

client.login(token);
