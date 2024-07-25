const express = require('express');
const fs = require('fs');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      const responseText = [];
      if (err) {
        responseText.push('Cannot load the database');
        reject(responseText);
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const headdings = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));

      responseText.push(`Number of students: ${students.length}`);

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
        responseText.push(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldNames[field].join(', ')}`);
      });

      resolve(responseText);
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});


app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(...report);
      console.log(responseParts)
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(1245);
// const originalstdoutWrite = process.stdout.write;

// process.stdout.write = (data) => {
//   output.push(data);
// };
// countStudents(DB_FILE).then(() => {
//   process.stdout.write = originalstdoutWrite;
// }).catch((err) => {
//   output.push(err.message);
//   process.stdout.write = originalstdoutWrite;
// });

module.exports = app;
