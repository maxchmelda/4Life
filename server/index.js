const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const cors = require("cors");

require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // To parse JSON body in requests

let messages = []; // To store messages
const TARGET_CHANNEL_ID = process.env.CHANNEL_ID; // Channel ID from .env
const BOT_TOKEN = process.env.BOT_TOKEN; // Bot token from .env

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Fetch chat history when the bot starts
async function fetchChatHistory() {
  try {
    const channel = await client.channels.fetch(TARGET_CHANNEL_ID);
    const fetchedMessages = await channel.messages.fetch({ limit: 50 }); // Fetch last 50 messages
    messages = fetchedMessages
      .map((msg) => ({
        author: msg.author.username,
        content: msg.content,
        avatar: msg.author.displayAvatarURL(),
        timestamp: msg.createdTimestamp,
      }))
      .reverse(); // Reverse to show oldest first
  } catch (error) {
    console.error("Error fetching message history:", error);
  }
}

// Triggered when the bot is ready
client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);
  await fetchChatHistory(); // Fetch chat history on startup
});

// Listen for new messages in the specific channel
client.on("messageCreate", (message) => {
  if (message.channel.id === TARGET_CHANNEL_ID && !message.author.bot) {
    messages.push({
      author: message.author.username,
      content: message.content,
      avatar: message.author.displayAvatarURL(),
      timestamp: message.createdTimestamp,
    });

    // Limit stored messages to the last 100
    if (messages.length > 100) messages.shift();
  }
});

// Listen for message deletions
client.on("messageDelete", (message) => {
  if (message.channel.id === TARGET_CHANNEL_ID) {
    // Remove deleted message from the stored messages array
    messages = messages.filter(
      (msg) => msg.timestamp !== message.createdTimestamp,
    );
  }
});

// API endpoint to fetch the newest 3 messages
app.get("/api/messages", (req, res) => {
  res.json(messages.slice(-3)); // Send the last 3 messages
});


// Start the bot
client.login(BOT_TOKEN); // Login using the bot token from .env

// Start the backend server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
