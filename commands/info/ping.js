 
const { Message, Client } = require("discord.js");
const { wtf } = require('../../events/messageCreate.js')
module.exports = {
        name: "ping",
        description: `Test the bots response time.`,
        aliases: [],
         async execute(client, message, args) {
           if(!wtf) return message.reply({ content: `**The bot files have been vandalized and become unusable. Thank you for your understanding 
           تم التخريب في ملفات البوت و اصبح غير صالح للاستخدام شكرا لتفهمك**` });
           
                message.reply({ content: `:ping_pong: **Pong ${client.ws.ping} ms**` });
        },
};