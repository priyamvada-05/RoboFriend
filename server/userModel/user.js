const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
	email:{type: String,  require: true, lowercase: true},
	createdAt:{ type: Date, default:Date.now},
})

module.exports=mongoose.model('UserModel', UserSchema);