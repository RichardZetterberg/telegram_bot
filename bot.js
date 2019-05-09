const TelegramBot = require('node-telegram-bot-api');
const token = '843724111:AAFTJK0Jf6WKlY4EzluuX8PNe7-HBd9VCQc';

const bot = new TelegramBot(token, {polling: true});

const url = 'https://sinoptik.ua';
//const axios = require('axios');
const cheerio = require('cheerio');
var needle = require("needle");

bot.onText(/today/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

  let $ = cheerio.load(res.body);

 // console.log($(".main #bd2").text());
   let something  = $("#bd1 .temperature ").text();
   console.log(something);
    const chatId = msg.chat.id;
  bot.sendMessage(chatId, something);
})
  
});

bot.onText(/tomorrow/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

  let $ = cheerio.load(res.body);

 // console.log($(".main #bd2").text());
   let something  = $("#bd2 .temperature ").text();
   console.log(something);
    const chatId = msg.chat.id;
  bot.sendMessage(chatId, something);
})
  
});

bot.onText(/next/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

  let $ = cheerio.load(res.body);

 // console.log($(".main #bd2").text());
   let something  = $("#bd3 .temperature ").text();
   console.log(something);
    const chatId = msg.chat.id;
  bot.sendMessage(chatId, something);
})
  
});