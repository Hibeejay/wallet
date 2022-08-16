/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = Libs.CryptoAdGateWayBot.GetBalance({
  currency: cur,
  api_key: api_key
})
//inspect data
Bot.inspect(data)
