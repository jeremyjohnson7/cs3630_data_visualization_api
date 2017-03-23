const express = require('express');
const app = express();

let data = [
    { x: 1, y: 10 },
    { x: 2, y: 5 },
    { x: 3, y: 15 }
];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    // res.send('Hello world!')
    console.log(req);
    res.send(data);
});

app.listen(3080, () => {
    console.log('Example app listening on port 3080!')
});
