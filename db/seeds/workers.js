
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workers').del()
    .then(function () {
      // Inserts seed entries
      return knex('workers').insert([
        {name: 'Bucky'},
        {name: 'BooBoo'},
        {name: 'Smoochie'}
      ]);
    });
};
