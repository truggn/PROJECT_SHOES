require('dotenv').config();
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const db = require('./config/db');

// connect to db 
db.connect();


const app = express();
const router = require('./routes');



const port= 4000;
// template engine
app.engine('hbs' , handlebars({
    extname: '.hbs'
}));
app.set('view engine' , 'hbs');
app .set('views' , path.join(__dirname,'src','views'));

     app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(morgan('combined'));


app.use(express.static(path.join(__dirname, 'public')));

// router init
router(app);


app.listen(port , () => console.log(`Project app listenning on port ${port}`))
