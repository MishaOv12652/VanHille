const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/db');


//connection to db
mongoose.connect(config.database);
//on connection status
mongoose.connection.on('connected', () => {
    console.log('connected to db: ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('error connecting to db: ' + err);
});


const app = express();
 
const VHStudent = require('./routes/VHStudent');
const vanHille = require('./routes/VHQuiz');
const user = require('./routes/user');
const cloudLinks = require('./routes/cloudlinks');

//For Heroku Upload
 const forceSSL = function() {
     return function (req, res, next) {
       if (req.headers['x-forwarded-proto'] !== 'https') {
         return res.redirect(
          ['https://', req.get('Host'), req.url].join('')
         );
       }
       next();
     }
   }
  
   //port number
   const port = process.env.PORT || 3050;
   app.use(forceSSL());

//port number - for develop
//const port = 3050;
//CORS MW
app.use(cors());
//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));
//Body Parser MW
app.use(bodyParser.json())
//passport MW
app.use(session({secret: 'secret'}))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use('/VHS',VHStudent);
app.use('/VanHilleQuiz',vanHille);
app.use('/User',user);
app.use('/CloudLinks',cloudLinks);

//Index Route
app.get('/',(req,res)=>{
    res.send('Invalid End Point');
});

//For Heroku Upload
 app.get('/*', function(req, res) {
     res.sendFile(path.join(__dirname + '/public/index.html'));
   });

//Start Server
app.listen(port,()=>{
    console.log('server started on port: ' + port);
})
