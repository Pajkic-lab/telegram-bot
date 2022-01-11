const { Telegraf } = require('telegraf')
require('dotenv').config()

const chatId = process.env.TELEGRAM_GROUP_CHAT_ID
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

const message = 'RADI !!!!'


const run = async () => {
    try {
        // Radi
        await bot.telegram.sendMessage(chatId, message)
    } catch (error) {
        console.log(error)
    }
}

run()
