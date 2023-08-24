const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        res.json("hello world");
    } catch (error) {
        res.json(error);
    }
})

app.listen(5050, () => {
    console.log(`aplikasi jalan di localhost port 5050`);
})