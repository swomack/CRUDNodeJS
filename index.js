let express = require('express');
let path = require('path');
let app = express();


app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(3000, function() {
    console.log('The server is running at post 3000');
});