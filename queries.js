const database = require('./database-connection');

module.exports = {
  list(table) {
    return database(table);
  },
  creatorBets(id) {
    return database('bets')
      .join('users', 'users.id', '=', 'bets.creator')
      .select('users.name', 'bets.id', 'bets.description', 'bets.amount', 'bets.accepted', 'bets.resolved', 'bets.winner', 'bets.date', 'bets.comment');
  }
  // read(id) {
  //   return database('resolution')
  //     .where('id', id)
  //     .first();
  // },
  // create(resolution) {
  //   return database('resolution')
  //     .insert(resolution)
  //     .returning('*')
  //     .then(record => record[0]);
  // },
  // update(id, resolution) {
  //   return database('resolution')
  //     .update(resolution)
  //     .where('id', id)
  //     .returning('*')
  //     .then(record => record[0]);
  // },
  // delete(id) {
  //   return database('resolution')
  //     .where('id', id)
  //     .del();
  // }
};
