
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workers').del()
    .then(function () {
      // Inserts seed entries
      return knex('workers').insert([
        {name: 'Bucky Stewart', location: 'Phoenix, AZ', relocate: true, experience: 5.5, yearsout: 6, current: 'Attorney', level: 'Associate', practice: 'Patent', employer: 'BigLawFirm', past: 'OldLawFirm', other: 'software', certifications: 'NA', license: 'AZ, CA', degree: 'JD, LLM', skills: 'litigation, research', phone: '777-777-7777', email: 'email@email.com'}
      ]);
    });
};
