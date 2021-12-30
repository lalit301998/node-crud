module.exports = (app) => {
var StudentController = require('../Controllers/Students');
var filesController = require("../Controllers/files");
 
	app.post('/Add-Students',StudentController.addStudents);
	app.get('/createStudents',StudentController.creareStudents);
	app.get('/students',StudentController.showStudents);
	app.get('/editStu/{id}',StudentController.editStudents);
	app.post('/addFile',filesController.createFile);
	app.get('/uploadfile',filesController.readFileup);
	app.post('/readuploadfile',upload.array("files"),filesController.uploadFiles);
	app.get('/loginwithfb',StudentController.loginWithfb);
}