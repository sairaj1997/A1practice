const express = require('express')
const path=require('path')
const app = express()
const port = process.env.PORT||3000;

app.use(express.static(__dirname + '/dist/firstfullstk'));
app.get('/', (req, res) => res.sendfile(path.join(__dirname + '/dist/firstfullstk/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))