const express = require('express');
const app = express();
const PORT = process.env.port || 8080;
const htmlroutes = require('./routes/htmlroutes.js');

htmlroutes(app);

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
