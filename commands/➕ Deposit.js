/*CMD
  command: ➕ Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = Libs.CryptoAdGateWayBot.Deposit({
  currency: cur,
  api_key: api_key
})
//inspect data
Bot.inspect(data)

