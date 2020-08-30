
const homeRouter = require('../routes/home.route');
const siteRouter = require('../routes/site.router');
const procductRouter = require('../routes/product.route');
const adminRouter = require('../routes/admin.route');

function router(app){

app.use('/home', homeRouter);
app.use('/admin' ,adminRouter );
app.use('/product' , procductRouter);
app.use('/', siteRouter);

    

}
module.exports = router;