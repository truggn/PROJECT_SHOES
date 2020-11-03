 
 module.exports = function sortMiddleware (req , res , next){
     // khi nao chuc nang sort dc bat khi nao ko dc bat 
            res.locals._sort ={
                enabled: false,
                type: 'default'
            }
            //check neu co chuc nang sort thi gan lai gia tri
            // neu ma co chuc nang sort thi bat lai la true
        if(req.query.hasOwnProperty('_sort')){  
                // res.locals._sort.enabled = true,
                // res.locals._sort.type = req.query.type;
                // res.locals._sort.column = req.query.column;


                Object.assign(res.locals._sort ,{
                    enabled: true,
                    type: req.query.type,
                    column: req.query.column
                });
        }
            
    next();
 }