const express = require('express');
const fs = require('fs');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const headdings = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));

      process.stdout.write(`Number of students: ${students.length}`);

      const fieldCounts = {};
      const fieldNames = {};
      students.forEach((student) => {
        if (student.length !== headdings.length) return;
        const field = student[3];
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldNames[field] = [];
        }
        fieldCounts[field] += 1;
        fieldNames[field].push(student[0]);
      });

      Object.keys(fieldCounts).forEach((field) => {
        process.stdout.write(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldNames[field].join(', ')}`);
      });

      resolve();
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const output = [];
app.get('/students', (req, res) => {
  res.write(`This is the list of our students\n${output.join('\n')}`);
  res.end()
});

app.listen(1245);
const originalstdoutWrite = process.stdout.write;

process.stdout.write = (data) => {
  output.push(data);
};
countStudents(DB_FILE).then(() => {
  process.stdout.write = originalstdoutWrite;
}).catch((err) => {
  output.push(err.message);
  process.stdout.write = originalstdoutWrite;
});

module.exports = app;
