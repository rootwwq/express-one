var express = require("express");
var router = express.Router();
const user = require("../sql/user");


router.get("/", function (req, res, next) {
    console.log('此时进入了register');
    res.render("register");
})




router.post("/in", function (req, res, next) {
    console.log('进入register3 的in 处理');

    let obj = req.body;

    // user.insertMany(obj,(err,data)=>{
    //     if(err) {
    //         console.log(err)
    //     }
    //     console.log(data)

    //     if(data) {
    //         res.redirect('/login')
    //     }else {
    //         res.redirect('/register')
    //     }

    // })
    // 解决用户重复注册
    // console.log(11111);
    // if(obj.userName||obj.passwd){
    //     res.redirect('/register')
    // }else{
    user.findOne({ userName: obj.userName }, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            console.log(data);
            res.redirect('/register')
        } else {
            user.insertMany(obj, (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log(data);
                res.redirect('/login')
            })
        }
    })
// }
   

})



module.exports = router;