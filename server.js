
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, 'uploads')));



const MainRoutes = require('./routes/main');
const OtherRoutes = require('./routes/other');

app.use('/', MainRoutes);
app.use('/other', OtherRoutes);



http.createServer(app);
const port = process.env.APP_PORT || 3000;

app.listen(port, function () {
    console.log("Server started on port " + port + " !!!");
});
