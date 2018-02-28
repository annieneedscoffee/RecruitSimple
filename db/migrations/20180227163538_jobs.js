
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function(table){
    table.increments();
    table.string('jobtitle');
    table.string('location');
    table.boolean('remote');
    table.decimal('experience');
    table.string('previous');
    table.string('practice');
    table.string('other');
    table.string('certifications');
    table.string('license');
    table.string('degree');
    table.string('skills');
    table.string('phone');
    table.string('email');
    table.string('company');
    table.string('contactperson');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {

};
