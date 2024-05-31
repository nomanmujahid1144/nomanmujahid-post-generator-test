// chatgpt.js
const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.CHATGPT_API,
});


module.exports = { openai };
