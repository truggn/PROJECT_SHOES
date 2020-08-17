
const homeRouter = require('../routes/home.route');
const siteRouter = require('../routes/site.router');

function router(app){

app.use('/home', homeRouter);
app.use('/', siteRouter);
    

}
module.exports = router;