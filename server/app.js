const express = require('express');
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/video', (req, res) => {
    res.sendFile('assets/sample.mp4', { root: __dirname });
})
app.get('/', (req, res)=> res.send ("Home!"))

app.listen(4000, () => {
    console.log('Listening on port 4000!')
});