const TelegramBot = require('node-telegram-bot-api');
const token = '843724111:AAFTJK0Jf6WKlY4EzluuX8PNe7-HBd9VCQc';

const bot = new TelegramBot(token, {polling: true});

const url = 'https://sinoptik.ua';
const cheerio = require('cheerio');
var needle = require("needle");

bot.onText(/start/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

  let $ = cheerio.load(res.body);

   let message  = "Этот бот парсит информацию о погоде за три дня с сайта: 'Sinoptik'. Возможные команды: /start /today /tomorrow /next /todayDescription"

   const chatId = msg.chat.id;

   bot.sendMessage(chatId, message);
  
})
  
});

bot.onText(/today/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

   let $ = cheerio.load(res.body);

   let MaxMinTemperature  = $("#bd1 .temperature ").text();

   const chatId = msg.chat.id;

   bot.sendMessage(chatId, `Температура сегодня ${MaxMinTemperature}`);
  
})
  
});

bot.onText(/todayDescription/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

   let $ = cheerio.load(res.body);

   let description  = $(".description").text();
   /*let description  = $(".temperature").text();
   let description  = $(".temperatureSens").text();
   let description  = $("tr.gray").text();*/

   const chatId = msg.chat.id;

   bot.sendMessage(chatId, `Описание ${description}`);
   /*bot.sendMessage(chatId, `Температура ${temperature}`);
   bot.sendMessage(chatId, `Как чувствуется ${temperatureSens}`);
   bot.sendMessage(chatId, `Остальное ${tr.gray}`);*/
  
})
  
});

bot.onText(/tomorrow/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

  let $ = cheerio.load(res.body);

   let MaxMinTemperature  = $("#bd2 .temperature ").text();

 
    const chatId = msg.chat.id;
   	bot.sendMessage(chatId, `Температура завтра ${MaxMinTemperature}`);
})

});

bot.onText(/next/, (msg) => {
  needle.get(url,  function(err, res){
  if (err) throw (err);

  let $ = cheerio.load(res.body);
   let MaxMinTemperature  = $("#bd3 .temperature ").text();
 

   const chatId = msg.chat.id;
  	bot.sendMessage(chatId, `Температура после завтра ${MaxMinTemperature}`);

}) 

});

