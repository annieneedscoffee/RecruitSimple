
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {jobtitle: 'Attorney', location: 'Phoenix, AZ', remote: false, experience: 5.0, previous: 'Attorney', practice: 'IP', other: 'software', certifications: 'na', license: '', degree: 'JD', skills: '', phone: '555-555-5555', email: 'email@address.com', company: 'A+LawFirm', contactperson: "Judy HR"}
      ]);
    });
};
