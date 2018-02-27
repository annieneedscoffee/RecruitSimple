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

  postcand: function(req, res){
    knex('workers')
    .insert({
      name: req.body.name,
      location: req.body.location,
      relocate: req.body.relocate,
      experience: req.body.experience,
      yearsout: req.body.yearsout,
      current: req.body.current,
      level: req.body.level,
      practice: req.body.practice,
      employer: req.body.employer,
      past: req.body.past,
      other: req.body.other,
      certifications: req.body.certifications,
      license: req.body.license,
      degree: req.body.degree,
      skills: req.body.skills,
      phone: req.body.phone,
      email: req.body.email
    }, "*")
    .then((result)=>{
      res.redirect("/legalgather")
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
