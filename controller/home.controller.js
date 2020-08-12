
module.exports.home = function(req , res ){
    res.render('home/index')
}
module.exports.login = function(req , res ){
    res.render('home/login')
}
module.exports.register = function(req , res){
    res.render('home/register')
}