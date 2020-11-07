//test是一个测试文件 不要在项目中使用   
const db = require('./db')
const userSchema = new db.mongoose.Schema ({
    // "_id":{type:String},
    "userName":{type:String},
    "passwd":{type:String},
})

 
module.exports = db.mongoose.model("user",userSchema)
