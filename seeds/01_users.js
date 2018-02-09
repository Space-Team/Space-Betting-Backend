exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: 1,
          name: 'No one',
          password: 'adminonly',
          spacebucks: 100,
          image: 3,
          firstName: 'no',
          lastName: 'winner'
        },
        {
          id: 2,
          name: 'pretty-paul',
          password: 'pretty',
          spacebucks: 100,
          image: 1,
          firstName: 'Paul',
          lastName: 'Highum'
        },
        {
          id: 3,
          name: 'evil-emily',
          password: 'evil',
          spacebucks: 100,
          image: 2,
          firstName: 'Emily',
          lastName: 'Pancake'
        },
        {
          id: 4,
          name: 'crocodile-kyle',
          password: 'crocodile',
          spacebucks: 100,
          image: 4,
          firstName: 'Kyle',
          lastName: 'Weintraub'
        },
        {
          id: 5,
          name: 'adventurous-amber',
          password: 'adventurous',
          spacebucks: 100,
          image: 3,
          firstName: 'Amber',
          lastName: 'Johnson'
        }
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 6');
    });
};
