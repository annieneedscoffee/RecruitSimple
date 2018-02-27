exports.up = function(knex, Promise) {
  return knex.schema.createTable('workers', function(table){
    table.increments();
    table.string('name');
    table.string('location');
    table.boolean('relocate');
    table.decimal('experience');
    table.decimal('yearsout');
    table.string('current');
    table.string('level');
    table.string('practice');
    table.string('employer');
    table.string('past');
    table.string('other');
    table.string('certifications');
    table.string('license');
    table.string('degree');
    table.string('skills');
    table.string('phone');
    table.string('email');
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workers');
};
