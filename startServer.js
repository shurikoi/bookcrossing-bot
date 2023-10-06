const https = require("https")

const startServer = (hostname, port) => {
  

  const server = https.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World")
  })

  server.listen(port, hostname, (e) => {
    if (e) {
      console.log("Error starting server:", e)
      process.exit(1)
    }

    console.log(`Server running at http://${hostname}:${port}/ \n`)
  })
}

module.exports = startServer