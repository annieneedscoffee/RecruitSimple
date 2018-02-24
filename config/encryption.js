let bcrypt = require('bcrypt')
let SALT_WORK_FACTOR = 10;

module.exports = {

  hash: function(admins){
    return new Promise((resolve, reject)=>{
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
          if (err) reject(err);

          // hash the password using our new salt
          bcrypt.hash(admins.password, salt, function(err, hash) {
              if (err) reject(err);

              // override the cleartext password with the hashed one
              admins.password = hash;
              resolve(admins);
          });
      });
    })

  },

  check: function(encryptedUser, admins){
    return new Promise((resolve, reject)=>{
      bcrypt.compare(admins.password, encryptedAdmin.password, function(err, isMatch) {
          if (err) reject(err);
          resolve(isMatch);
      });
    })

  }


}
