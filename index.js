const express = require('express')
const bodyparser = require("body-parser")
const app = express()
const port = 3200
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/airdrops', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
