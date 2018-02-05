exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments().primary();
    table.text('name');
    table.text('password');
    table.integer('spacebucks');
    table.integer('image');
    table.date('date');
    table.text('firstName');
    table.text('lastName');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
