const index = require("../controllers/index.js");

module.exports = function(app){


  app.get('/', index.main);
  app.get('/legalgather', index.lndg);
  app.get('/legalgatheremployers', index.getemp);
  app.get('/legalgathercandidates', index.getwork);
  app.get('/legalgatheradmin', index.admin);
}
