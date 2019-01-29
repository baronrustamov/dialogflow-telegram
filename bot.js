const TelegramBot = require("node-telegram-bot-api");

const BOT_TOKEN = '573770977:AAHZ4T77pNwrSM16zreOvWl4EijPo9jneJ4'

const bot = new TelegramBot(BOT_TOKEN,{polling:true})
// bot.onText(/\/echo (.+)/,(msg,match)=>{
//     const chatId = msg.chat.id
//     let messageReply = "Hello, welcome to this bot\n This is a message\\nJohnny love sugar"
//     bot.sendMessage(chatId,messageReply)
// })
bot.onText(/\/echo (.+)/,(msg,match)=>{
    const chatId = msg.chat.id
    axios
      .get(`https://api.dialogflow.com/v1/intents?v=20150910`, {
        headers: {
          Authorization: `Bearer 2785b3471b0f4330b137126e018a0903`
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
    let messageReply = "Hello, welcome to this bot\n This is a message\\nJohnny love sugar"
    bot.sendMessage(chatId,messageReply)
})

