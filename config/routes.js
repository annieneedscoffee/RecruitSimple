const index = require("../controllers/index.js");

module.exports = function(app){


  app.get('/', index.main);
  app.get('/legalgather', index.lndg);
  app.get('/legalgather/employers', index.getemp);
  app.get('/legalgather/candidates', index.getwork);

  app.post('/addworker', index.postcand);
  app.post('/addjob', index.addjob);
  app.get('/workers/delete/:id', index.delcand);
  app.get('/jobs/delete/:id', index.deljob);
  app.get('/legalgather/admin/editjob/:id', index.edjob);
  app.get('/legalgather/admin/editcand/:id', index.edcand);
  app.post('/legalgather/admin/editjob/:id', index.edjobpost);
  app.post('/legalgather/admin/editcand/:id', index.edcandpost);
  app.get('/legalgather/admin/warn/job/:id', index.warnjob);
  app.get('/legalgather/admin/warn/worker/:id', index.warncand);
  app.get('/legalgather/login', index.log);
  app.post('/legalgather/login', index.login);

  app.use(adminAuth);
    app.get('/legalgather/admin/:id', index.admin);
    app.get('/legalgather/admin/matchjob/:id', index.matchjob);
    app.get('/legalgather/admin/matchcand/:id', index.matchcand);
}

function adminAuth(req,res,next){
  if(req.session.admins){
    next();
  }else{
    res.redirect('legalgather/login');
  }
}
