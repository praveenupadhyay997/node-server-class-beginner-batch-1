const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Server is healthy and listening heartbeat...');
});

app.get('/loginView', (req, res) => {
    res.json({status: 'Login Endpoint'});
});

app.listen(PORT, () => {
    console.log('Server is listening at PORT: ' + PORT);
});
