//host a local host
//code
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/read', (req, res) => {
    fs.readFile('input.txt', (err, data) => {
        if (err) {
            res.send('Error');
        }
        res.send(data.toString());
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

