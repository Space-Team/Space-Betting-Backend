const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');

app.use(bodyParser.json());
app.use(cors());

app.get('/creator-bets/', (req, res) => {
  queries
    .creatorBets(req.params.id)
    .then(bets => {
      res.json({bets});
    })
    .catch(console.error);
});

app.get('/users', (req, res) => {
  queries
    .list('users')
    .then(users => {
      res.json({users});
    })
    .catch(console.error);
});

app.get('/bets', (req, res) => {
  queries
    .list('bets')
    .then(bets => {
      res.json({bets});
    })
    .catch(console.error);
});

app.post('/users', (req, res) => {
  queries
    .create(req.body)
    .then(user => {
      res.status(201).json({user});
    })
    .catch(console.error);
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT || 3000);
