require('dotenv').config();
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/' , homeRoute);
app.use('/' , productsRoute);
app.use('/', khuyenmaiRoute);

app.listen(port , () => console.log(`Project app listenning on port ${port}`))
