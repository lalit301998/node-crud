const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
  var classes = sequelize.define('classes', {
    class_name: {
      type: Sequelize.STRING
    },
    status : {
        type : Sequelize.STRING,
        defaultValue : 1,
    }
    
  },{
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
  })
  classes.sync().then(() => {
    // Table created    
  });

  return classes;
};


// classes.sync({}).then(() => {
//   console.log('ok ... everything is nice!');
// }).catch(error => {
//   console.log('oooh, did you enter wrong database credentials?');
// });