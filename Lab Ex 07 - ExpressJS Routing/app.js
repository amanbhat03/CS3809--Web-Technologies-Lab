const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the course structure to include the "credits" field
let courses = [
  { id: 1, title: 'Intellectual Property Rights', instructor: 'Dr. Tanaya Thakur', credits: 3 },
  { id: 2, title: 'Web Technologies', instructor: 'Dr.Rohit Kumar', credits: 3 },
  { id: 3, title: 'Artificial Intelligence', instructor: 'Dr. Dhivya', credits: 3 },
];

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.post('/courses', (req, res) => {
  const newCourse = req.body;
  newCourse.id = courses.length + 1; // Generate a new ID (this is basic; in real apps, use proper ID management)
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.listen(port, () => {
  console.log(`Learning Management System listening on port ${port}`);
});
