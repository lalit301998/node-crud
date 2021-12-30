
 const filepath = "public/uploads";
exports.createFile = function(req,res){   
    const filepath = "public/uploads";
    const buff = Buffer.from(filepath+'/'+'hello.mp3', 'base64');
    console.log(buff);
    if(ext==".mp3"){
        fs.writeFile(filepath +'/'+req.body.filename, buff, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
              console.log("The written has the following contents:");
             
            }
          });
    }
	else{
        fs.writeFile(filepath +'/'+req.body.filename, "data", (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
              console.log("The written has the following contents:");
             
            }
          });
    }
}
exports.readFileup = function(req,res){
    if(res){
        res.render('file.ejs');
    } 
    else{
        console.warn();
    }
}
exports.readUplodedfile = function(req,res){
    const file = req.body.filename;
    console.log(file);  
    fs.readFile(file, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
        }
      
        console.log(data)
       
    })
}

exports.uploadFiles =function(req, res) {
    const files = req.body.files;
    console.log(files);
}

