require("dotenv").config();
const { Client } = require("discord.js-selfbot-v13");
const axios = require("axios");

const client = new Client();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const ALLOWED_GUILD_ID = process.env.ALLOWED_GUILD_ID;
const ALLOWED_CHANNEL_ID = process.env.ALLOWED_CHANNEL_ID;

client.on("ready", () => {
    console.log(`✅ Selfbot aktif sebagai ${client.user.username}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot || message.author.id === client.user.id) return;
    if (message.guild.id !== ALLOWED_GUILD_ID || message.channel.id !== ALLOWED_CHANNEL_ID) return;

    try {

      const getRandomMaxTokens = () => Math.floor(Math.random() * (50 - 5 + 1)) + 5; 
      const response = await axios.post(
          "https://api.groq.com/openai/v1/chat/completions",
          {
              model: "mixtral-8x7b-32768",
              temperature: Math.random() * (1.3 - 0.7) + 0.7, // Random antara 0.7 - 1.3
              max_tokens: getRandomMaxTokens(), // Random panjang pendek
              messages: [
                  { 
                      role: "system", 
                      content: "You're a fun, witty, and friendly person. Respond casually like you're chatting with a friend. Use humor, sarcasm. Mix short and long responses!" 
                  },
                  { role: "user", content: message.content }
              ],
          },
          { headers: { Authorization: `Bearer ${GROQ_API_KEY}`, "Content-Type": "application/json" } }
      );


      const reply = response.data.choices[0].message.content;
      await message.channel.send(reply); // Kirim pesan tanpa reply langsung
    } catch (error) {
        console.error("❌ Error:", error.response?.data || error.message);
    }
});

client.login(DISCORD_TOKEN);
