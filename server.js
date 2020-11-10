const express = require('express');
const app = express();
const PORT = process.env.port || 8080;
const htmlroutes = require('./routes/htmlroutes.js');
const apiroutes = require('./routes/apiroutes.js');

htmlroutes(app);
apiroutes(app);

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
