const express=require('express');
const routes=express.Router();
//const dataUpload= require('../data-upload/dataUpload');
//const dataModelUpdated= require('../data-model/dataModelUpdated');
//const normalize = require('array-normalize')
const userModel = require('../userModel/user');


routes.post('/user', (req, res)=>{
	const { email} = req.body;

	const user = new userModel({email})
	user.save().then((data)=>{
		console.log(data)
	}).catch((err)=>{
		console.log(err)
	})
})


module.exports=routes;