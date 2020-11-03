require('dotenv').config();
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const db = require('./config/db');
const sortMiddleware = require('./middleware/sort.middleware');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);



// connect to db 
db.connect();


const app = express();
const router = require('./routes');
const { options } = require('./routes/home.route');

const port= 4000;
// template engine, 
app.engine('hbs' , handlebars({
    extname: '.hbs',
    defaultView: 'main',
    layoutsDir: __dirname + '/layouts',
    partialsDir: __dirname + '/partials/',
    helpers: require ('./src/helpers/handlebars')

    })
);

app.set('view engine' , 'hbs');
app.set('views' , path.join(__dirname,'src','views'));



app.use(express.json());
app.use(express.urlencoded({extended: true}));

// //use sessions for tracking logins
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore(options)
//   }));
// custom middleware
app.use(sortMiddleware);
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));


// router init
router(app);


app.listen(port , () => console.log(`Project app listenning on port ${port}`))
