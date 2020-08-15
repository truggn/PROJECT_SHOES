require('dotenv').config();
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');


const app = express();
const homeRoute = require('./routes/home.route');
const productsRoute = require('./routes/products.route');
const khuyenmaiRoute = require('./routes/khuyenmai.route');


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

app.use('/' , homeRoute);
app.use('/' , productsRoute);
app.use('/', khuyenmaiRoute);

app.listen(port , () => console.log(`Project app listenning on port ${port}`))
