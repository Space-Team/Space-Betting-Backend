exports.up = function(knex, Promise) {
  return knex.schema.createTable('bets', table => {
    table.increments().primary();
    table.text('description');
    table.integer('amount');
    table.boolean('accepted');
    table.boolean('resolved');
    table.integer('creator').references('users.id');
    table.integer('acceptor').references('users.id');
    table.integer('winner').references('users.id');
    table.date('date');
    table.text('comment');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bets');
};
