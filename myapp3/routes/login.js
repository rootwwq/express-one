var express = require("express");
var router = express.Router();
const user1 = require("../sql/user");

router.get("/", function (req, res, next) {
    console.log('进来login路由的/里面了')

    res.render("login");
});

router.post("/in",function(req,res,next){
    console.log('进入login 路由了 /in了');
    let obj=req.body;
    // console.log(req.body);
    console.log(obj);
    user1.findOne(obj,(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log(data);
        if(data){
             res.cookie('islogin','ok')
               //req.session.islogin = 'ok'
               console.log('我在login  路由 /in 里面')
           res.redirect('/pro')
        }else{

            res.redirect('/register')
        }
    })
})

module.exports = router;