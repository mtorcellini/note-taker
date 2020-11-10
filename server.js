const express = require('express');
const app = express();
const PORT = process.env.port || 8080;

app.use(express.static('public'));

app.get('/notes', (req, res, next) => {
    console.log('Sending file ' + __dirname + '/public/notes.html');
    res.sendFile(__dirname + '/public/notes.html');
});


app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});