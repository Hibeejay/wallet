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

Libs.CryptoAdGateWayBot.GetBalance({
  api_key: api,
  secret_key: secret,
  currency: cur,
  user: user.id
})

