const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory mock database
let users = [];
let skills = [
  { skill_name: 'Coding', teacher: 'John' },
  { skill_name: 'Cooking', teacher: 'Jane' },
];

// Endpoints
app.get('/skills', (req, res) => {
  res.json(skills);
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password, credits: 10 });
  res.send('User registered successfully!');
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
