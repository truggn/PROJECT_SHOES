require('dotenv').config();
var express = require('express');
var path = require('path');
var handlebars = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();
var homeRoute = require('./routes/home.route');
var productsRoute = require('./routes/products.route');
var khuyenmaiRoute = require('./routes/khuyenmai.route');


var port= 4000;
// template engine
app.engine('hbs' , handlebars({
    extname: '.hbs'
}));
app.set('view engine' , 'hbs');
app .set('views' , path.join(__dirname,'src','views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home' , homeRoute);
app.get('/login' , homeRoute);
app.get('/register',homeRoute);
app.get('/products' , productsRoute);
app.get('/khuyen-mai', khuyenmaiRoute);

app.listen(port , () => console.log(`Project app listenning on port ${port}`))
