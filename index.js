const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<div><label for="name">Nom :</label><input type="text" name="user_name"></div><div><label for="mail">e-mail:</label><input type="email" name="user_mail"></div><input type="submit" value="valider">')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
