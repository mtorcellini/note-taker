const express = require('express');
const path = require('path');

const htmlroutes = (app) => {
    app.use(express.static('public'));

    app.get('/notes', (req, res, next) => {
        console.log('Sending file ' + __dirname + '/public/notes.html');
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
}

module.exports = htmlroutes;

