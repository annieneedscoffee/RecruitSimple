const index = require("../controllers/index.js");

module.exports = function(app){


  app.get('/', index.main);
  app.get('/legalgather', index.lndg);

}
