const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//创建约束对象
const usersSchema = new Schema({
  username:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  header:String,
  post:String,
  info:String,
  company:String,
  salary:String,
});
//创建模型对象
const Users = mongoose.model('Users',usersSchema);

//暴露出去
module.exports = Users;

