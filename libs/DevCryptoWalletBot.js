let libPrefix = "DevCryptoWalletBotLib"
let lib = {
  endpoint:
    "https://api.bots.business/v1/bots/703862/new-webhook?&command=connect%26transaction&public_user_token=14b4cb728407f20f080de711d113cf97&user_id=1949188",
  commands: {
    onNotification: libPrefix + "_onNotification"
  },
  panelName: libPrefix + "Options"
}

function setupAdminPanel() {
  var panel = {
    title: "DevCryptoWalletBot options",
    description: "Options for DevCryptoWalletBot Lib",
    icon: "logo-bitcoin",

    fields: [
      {
        name: "APIKey",
        title: "API Key",
        description: "you can get your API key in @DevCryptoWalletBot",
        type: "password",
        placeholder: "API Key",
        icon: "key"
      },
      {
        name: "SecretAPIKey",
        title: "Secret API Key",
        description: "you can get your Secret API key in @DevCryptoWalletBot",
        type: "password",
        placeholder: "Secret API Key",
        icon: "key"
      }
    ]
  }

  AdminPanel.setPanel({
    panel_name: lib.panelName,
    data: panel,
    force: false // default false - save fields values
  })
}
function getOptions() {
  return AdminPanel.getPanelValues(lib.panelName)
}
function setup() {
  setupAdminPanel()
}
function getResultOptions() {
  return {
    result: JSON.parse(content)
  }
}
//notify
function onNotification() {
  Bot.run({ command: "/ONnotification", options: getResultOptions() })
}
//withdraw
function Withdraw(options) {
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.amount) {
    throw new Error(libPrefix + ": Please Set amount")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.address) {
    throw new Error(libPrefix + ": Please Set Wallet address")
  }
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
}
//deposit
function Deposit(options) {
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
}
//balance 
function GetBalance(options) {
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.user) {
    throw new Error(libPrefix + ": Please Set user")
  }
  var callback = Libs.Webhooks.getUrlFor({
    command: lib.command.onNotification,
    user_id: options.user
  })
  return
  HTTP.post({
    url: lib.endpoint,
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "balance"
    }
  })
}
publish({
  setup: setup,
  Withdraw: Withdraw,
  Deposit: Deposit,
  GetBalance: GetBalance
})
on(lib.commands.onNotification, onNotification)
