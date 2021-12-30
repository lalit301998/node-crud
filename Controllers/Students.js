
const {sequelize} = require('../models')
var students = require('../models/students')(sequelize);
// var request = require('request');
// const { render } = require('ejs');


exports.creareStudents = function(req,res)
{
	if(res){
		res.render('index.ejs');
	}
	else{
		console.warn();
	}
}
exports.addStudents = function(req, res)
{
	var data = req.body;
	 console.log("++++++++++++",data);
	 students.create(data,{
	 }).then(function(newstudents){
	 	res.send({
	 		status:true,
	 		message:"Data Saved",
	 		data:newstudents,
	 	});
		//  res.status(201).render('index.ejs', { isAdded : true } );

	 })
	 .catch(function(error){
	 	res.send({
	 		status:false,
	 		message:"Data Not Saved"+error,
	 		data:{},
	 	});
	 })
}
exports.showStudents = function(req,res){

	if(res){
		students.findAll()
		.then(function(result){
			console.log(result)
			// console.log(result);
			// res.send({
			// 	status:true,
			// 	message:"Data Found",
			// 	data:results
			// })
			res.render('viewstudents.ejs',{status:true,message:"Data Found",data:result})
			
		})
		.catch(function(error){
			res.send({
				status:false,
				message:"Something went wrong"+error,
				data:{}
			})
		})
		
	}
	else{
		console.warn();
	}
	
}
exports.editStudents = function(req, res){
	students.findAll({
		where:id= req.body.id
	}).then(function(result){
		console.log(result);
		res.render('index.ejs',{data:result})
	})
	.catch(function(error){
		console
		res.send({status:true,message:"Opps Somthing went wrong"+error,data:{}})
	})
}


exports.loginWithfb = function(req,res){
	console.log("hello")
}