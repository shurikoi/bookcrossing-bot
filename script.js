const axios = require("axios").default
require("dotenv").config()
const startServer = require("./startServer")

const bot = async () => {
  const hostname = "0.0.0.0"
  const port = 443

  //await not necessary yet
  await startServer(hostname, port)

  axios
    .post(`https://api.telegram.org/bot${process.env.BOT_API_KEY}/setWebhook`, {
      url: `https://${hostname}:${port}`,
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error.response.data)
      process.exit(1)
    })
}

bot()
