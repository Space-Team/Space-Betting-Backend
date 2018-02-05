exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: 1,
          name: 'pretty-paul',
          password: 'pretty',
          spacebucks: 100,
          image: 1,
          date: '2018-02-05',
          firstName: 'Paul',
          lastName: 'Highum'
        },
        {
          id: 2,
          name: 'evil-emily',
          password: 'evil',
          spacebucks: 100,
          image: 2,
          date: '2018-02-05',
          firstName: 'Emily',
          lastName: 'Pancake'
        },
        {
          id: 3,
          name: 'crocodile-kyle',
          password: 'crocodile',
          spacebucks: 100,
          image: 4,
          date: '2018-02-05',
          firstName: 'Kyle',
          lastName: 'Weintraub'
        },
        {
          id: 4,
          name: 'adventurous-amber',
          password: 'adventurous',
          spacebucks: 100,
          image: 3,
          date: '2018-02-05',
          firstName: 'Amber',
          lastName: 'Johnson'
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 5');
    });
};
