const express = require('express');
const path = require('path');
const fs = require('fs');
const db = path.join(__dirname, '../db/db.json');

const apiroutes = (app) => {

  /* 

DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

*/
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get('/api/notes', (req, res, next) => {
        res.sendFile(db);
    });

    app.post('/api/notes', (req, res, next) => {
        let newNote = req.body;
        newNote.id = Math.floor(Math.random() * 100000);
        fs.readFile(db, 'utf8', (err, data) => {
            if (err) throw err;
            data = JSON.parse(data);
            data.push(newNote);
            data = JSON.stringify(data);
            fs.writeFile(db, data, (err) => {
                if (err) throw err;
                res.end(db);
            });
        });

    app.delete('/api/notes/:id', (req, res, next) => {
        let idToDelete = req.params.id;
        console.log('Delete ' + idToDelete)
        fs.readFile(db, 'utf8', (err, data) => {
            if (err) throw err;
            data = JSON.parse(data);
            data = data.filter(note => note.id != idToDelete);
            data = JSON.stringify(data);
            fs.writeFile(db, data, (err) => {
                if (err) throw err;
                res.send(db);
            })
        })
    })



        /* fs.writeFile(db, notes, (err) => {
            if (err) throw err;
        }); */

        res.sendFile(db);
    })
} 



module.exports = apiroutes;
