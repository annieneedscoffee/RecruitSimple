var knex = require('../db/knex.js');

module.exports = {

  main: function(req, res, next) {
    res.redirect('/legalgather');
  },

  lndg: function(req, res) {
    knex('workers').then((result)=>{
    res.render('legalgather', {workers: result})
  })
  .catch((err)=>{
    console.error(err)
  });
},


};
