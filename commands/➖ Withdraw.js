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

Libs.CryptoAdGateWayBot.Withdraw({
  api_key: api,
  secret_key: secret,
  currency: cur,
  amount: amount,
  address: address,
  user: user.id
})

