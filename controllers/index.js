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

  getemp: function(req, res){
    knex('workers').then((result)=>{
      res.render('legalgatheremployers', {workers: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  getwork: function(req, res){
    knex('workers').then((result)=>{
      res.render('legalgathercandidates', {workers: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  admin: function(req, res){
    knex('workers').then((result)=>{
      res.render('legalgatheradmin', {workers: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  }

};
