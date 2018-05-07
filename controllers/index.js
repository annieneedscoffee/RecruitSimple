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

log: function(req, res) {
  knex('admins').then((result)=>{
  res.render('login', {admins: result});

})
.catch((err)=>{
  console.error(err)
});
},

login: function(req, res){
  knex('admins')
    .where('email', req.body.email)
    .then((result)=>{
      let admins = result[0];

     if(admins.password === req.body.password){
        req.session.admins = admins.id;
        res.redirect('/legalgather/admin/:id')
      }else{
        req.session.message = "Incorrect username or password."
        res.redirect('/legalgather/login')
      }
    })
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

  addjob: function(req, res){
    knex('jobs')
    .insert({
      jobtitle: req.body.jobtitle,
      location: req.body.location,
      remote: req.body.remote,
      experience: req.body.experience,
      practice: req.body.practice,
      previous: req.body.previous,
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
    knex('workers').then((workresult)=>{
      knex('jobs').then((jobresult)=>{
        res.render('legalgatheradmin', {workers: workresult, jobs: jobresult})
    })
      })
    .catch((err)=>{
      console.error(err)
    });
  },

  matchjob: function(req, res){
    knex('jobs')
    .where('id', req.params.id)
    .then((jobresult)=>{
      knex('workers')
      .then((workresult)=>{
        res.render('matchjob', {jobs: jobresult[0], workers: workresult})
      })
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  matchcand: function(req, res){
    knex('workers')
    .where('id', req.params.id)
    .then((workresult)=>{
      knex('jobs')
      .then((jobresult)=>{
        res.render('matchcand', {workers: workresult[0], jobs: jobresult})
      })
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  delcand: function(req, res){
    knex('workers')
    .where('id', req.params.id)
    .del()
    .then((result)=>{
      console.log(result);
      res.redirect('/legalgather/admin')
    })
    .catch((err)=>{
      console.error(err)
    });
  },


  deljob: function(req, res){
    knex('jobs')
    .where('id', req.params.id)
    .del()
    .then((result)=>{
      console.log(result);
      res.redirect('/legalgather/admin')
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  edjob: function(req, res, next){
    knex('jobs')
    .where('id', req.params.id)
    .then((result)=>{
      res.render('editjob', {jobs: result[0]})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  edjobpost: function(req, res){
    knex('jobs')
    .where('id', req.params.id)
    .update({
      jobtitle: req.body.jobtitle,
      location: req.body.location,
      remote: req.body.remote,
      experience: req.body.experience,
      practice: req.body.practice,
      previous: req.body.previous,
      other: req.body.other,
      certifications: req.body.certifications,
      license: req.body.license,
      degree: req.body.degree,
      skills: req.body.skills,
      phone: req.body.phone,
      email: req.body.email
    })
    .then((result)=>{
      res.redirect('/legalgather/admin')
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  edcand: function(req, res, next){
    knex('workers')
    .where('id', req.params.id)
    .then((result)=>{
      res.render('editcand', {workers: result[0]})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  edcandpost: function(req, res){
    knex('workers')
    .where('id', req.params.id)
    .update({
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
    })
    .then((result)=>{
      res.redirect('/legalgather/admin')
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  warnjob: function(req, res, next){
    knex('jobs')
    .where('id', req.params.id)
    .then((result)=>{
      res.render('deletejob', {jobs: result[0]})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  warncand: function(req, res, next){
    knex('workers')
    .where('id', req.params.id)
    .then((result)=>{
      res.render('deleteworker', {workers: result[0]})
    })
    .catch((err)=>{
      console.error(err)
    });
  }


};
