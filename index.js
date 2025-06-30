const Joi = require('joi');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const spots = [
  { id: 1, name: 'SkalizerSpot' },
  { id: 2, name: 'PotsdammerSpot' },
  { id: 3, name: 'OsloerSpot' }
]

app.use(express.json());

//GET REQUESTS
app.get('/', (req, res) => {
  res.send('Hello World');
})

//All spots
app.get('/api/spots', (req, res) => {
  res.send(spots);
})

//Spot by ID
app.get('/api/spots/:id', (req, res) => {
  const spot = spots.find(s => s.id === parseInt(req.params.id));
  if (!spot) res.status(404).send('The spot with the given ID was not found.');
  res.send(spot);
});

//Playing around
app.get('/api/spots/:year/:month', (req, res) => {
  res.send({
    prarams: req.params,
    query: req.query
  });
});

//POST REQUESTS:

app.post('/api/spots', (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    //400 Bad Request
    res.status(400).send('Name required and should be more than 3 letters.');
    return;
  }



  const spot = {
    id: spots.length + 1,
    name: req.body.name
  };
  spots.push(spot);
  res.send(spot);
});


//Error handling
app.listen(port, () => console.log(`Listening on port ${port}...`))
.on('error', (err) => {
    console.log('Server error:', err.message);
  });

//Catch unhandled errors
process.on('uncaughtException', (err) => {
  console.log('Uncaught error:', err.message);
});
