const database = require("./database-connection")

module.exports = {
  list(table){
    return database(table)
  },
  creatorBets(id){
    return database("bets")
      .join("users", "users.id", "=", "bets.creator")
      .select(
        "users.name",
        "bets.id",
        "bets.description",
        "bets.amount",
        "bets.accepted",
        "bets.resolved",
        "bets.winner",
        "bets.date",
        "bets.comment"
      )
  },
  createUser(user){
    return database("users")
      .insert(user)
      .returning("*")
      .then(record => record[0])
  },
  createBet(bet){
    return database("bets")
      .insert(bet)
      .returning("*")
      .then(record => record[0])
  },
  update(id, item, table){
    return database(table)
      .update(item)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  // read(id) {
  //   return database('resolution')
  //     .where('id', id)
  //     .first();
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
}
