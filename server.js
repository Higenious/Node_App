

const express     =  require('express');
var app           =  express();
const bodyParser  =  require('body-parser');
const mongoose    =  require('mongoose');

const path        =  require('path');
var router        =  express.Router();
const port        =  process.env.PORT || 3000;
const config      =  require('./config/database');

//Connect to DB
mongoose.connect(config.database);
//mongoose.connect('mongodb://localhost:27017/NVCC');
// Configure Server
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({  extended: true }));
//import Routes

var userRoutes    =  require('./route/userRoute');
var adminRoutes   =  require('./route/adminRoute'); 


//  headers

app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With,X-XSRF-TOKEN, querycriteria, x-access-token, sessionId, userId");
    res.removeHeader("X-Powered-By");
    next();
});

//apidocs
app.use(express.static('doc'))
app.get('/apidoc',  function(req,  res){
       res.redirect('/index.html');
});



// Routess/
app.all('*', userRoutes);
app.all('*', adminRoutes);



// Initialize routes

// start the Server
app.listen(port, function ()  {
    console.log(`Server listening on port ${port}`);
});
