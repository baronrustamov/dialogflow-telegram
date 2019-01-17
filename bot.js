const TelegramBot = require("node-telegram-bot-api");

const BOT_TOKEN = '573770977:AAHZ4T77pNwrSM16zreOvWl4EijPo9jneJ4'

const bot = new TelegramBot(BOT_TOKEN,{polling:true})
bot.onText(/\/echo (.+)/,(msg,match)=>{
    console.log(msg)
    console.log(match);
    const chatId = msg.chat.id
    bot.getMe()
    let messageReply = "Hello, welcome to this bot\n This is a message\\nJohnny love sugar"
    bot.sendMessage(chatId,messageReply)
})

