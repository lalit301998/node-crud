const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
  var students = sequelize.define('students', {
    stu_name: {
      type: Sequelize.STRING
    },
    father_name : {
      type: Sequelize.STRING,
    },
    mother_name : {
        type : Sequelize.STRING,

    },
    address : {
        type : Sequelize.TEXT,
    },
    mobile : {
        type : Sequelize.STRING,
       
    },
     entry_on : {
        type : Sequelize.DATE,
        defaultValue:new Date(),
       
    },
     updated_on : {
        type : Sequelize.DATE,
        defaultValue:new Date(),
       
    },
    status : {
        type : Sequelize.STRING,
        defaultValue : 1,
    }
    
  },{
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
  })
  students.sync().then(() => {
    // Table created    
  });

  return students;
};


// students.sync({}).then(() => {
//   console.log('ok ... everything is nice!');
// }).catch(error => {
//   console.log('oooh, did you enter wrong database credentials?');
// });