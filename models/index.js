
//Checking connection status
sequelize.authenticate().then(function () {
    // console.log('Connection has been established successfully');
}).catch(function (err) {
    console.error('Unable to connect to the database:', err);
}); //.done();
// load models

var models = [
    'students',
    'classes'
    
];

models.forEach(function (model) {
    //module.exports[model] = sequelize.import(__dirname + '/' + model);
    module.exports[model] = require(path.join(__dirname, model))(sequelize, sequelize);
});

// describe relationships
(function (m) {
    
   
})(module.exports);

// export connection
module.exports.sequelize = sequelize;