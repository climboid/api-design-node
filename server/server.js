var express = require('express');
var app = express();
var api = require('./api/api');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
app.use(express.static('client'));
// set up global error handling

// export the app for testing
module.exports = app;
