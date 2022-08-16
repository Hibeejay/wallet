/*CMD
  command: ➖ Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = Libs.CryptoAdGateWayBot.Withdraw({
  currency: cur,
  api_key: api_key, amount: amount, address: address 
})
//inspect data
Bot.inspect(data)
