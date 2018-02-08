exports.seed = function(knex, Promise) {
  return knex("bets")
    .del()
    .then(function() {
      return knex("bets").insert([
        {
          id: 1,
          description: "Who can hold their breath the longest?",
          amount: 10,
          accepted: false,
          resolved: false,
          creator: 2,
          acceptor: null,
          winner: null,
          creatorAttempt: null,
          acceptorAttempt: null,
          paid: false,
          comment: ""
        },
        {
          id: 2,
          description: "Japan will win the gold medal for curling.",
          amount: 25,
          accepted: true,
          resolved: false,
          creator: 3,
          acceptor: 2,
          winner: null,
          creatorAttempt: null,
          acceptorAttempt: null,
          paid: false,
          comment: ""
        },
        {
          id: 3,
          description: "Who can drink their beer the fastest?",
          amount: 3,
          accepted: true,
          resolved: true,
          creator: 4,
          acceptor: 2,
          winner: 2,
          creatorAttempt: 2,
          acceptorAttempt: 2,
          paid: false,
          comment: "Kyle has not yet paid up."
        },
        {
          id: 4,
          description:
            "Who can guess closest to the number of markers in the room?",
          amount: 100,
          accepted: true,
          resolved: true,
          creator: 3,
          acceptor: 5,
          winner: 1,
          creatorAttempt: 1,
          acceptorAttempt: 1,
          paid: false,
          comment: "We both guessed equally badly."
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE bets_id_seq RESTART WITH 5")
    })
}
