exports.seed = function(knex, Promise) {
  return knex('bets')
    .del()
    .then(function() {
      return knex('bets').insert([
        {
          id: 1,
          description: 'Who can hold their breath the longest?',
          amount: 10,
          accepted: false,
          resolved: false,
          creator: 1,
          acceptor: null,
          winner: null,
          creatorAttempt: null,
          acceptorAttempt: null,
          comment: ''
        },
        {
          id: 2,
          description: 'Japan will win the gold medal for curling.',
          amount: 25,
          accepted: true,
          resolved: false,
          creator: 2,
          acceptor: 1,
          winner: null,
          creatorAttempt: null,
          acceptorAttempt: null,
          comment: ''
        },
        {
          id: 3,
          description: 'Who can drink their beer the fastest?',
          amount: 3,
          accepted: true,
          resolved: true,
          creator: 3,
          acceptor: 1,
          winner: 1,
          creatorAttempt: null,
          acceptorAttempt: null,
          comment: 'Kyle has not yet paid up.'
        },
        {
          id: 4,
          description:
            'Who can guess closest to the number of markers in the room?',
          amount: 100,
          accepted: true,
          resolved: true,
          creator: 2,
          acceptor: 4,
          winner: null,
          creatorAttempt: null,
          acceptorAttempt: null,
          comment: 'We both guessed equally badly.'
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE bets_id_seq RESTART WITH 5');
    });
};
