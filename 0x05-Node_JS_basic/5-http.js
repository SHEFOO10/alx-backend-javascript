const http = require('http');
const fs = require('fs');

if (process.argv.length < 3) {
  console.error('You must send path to database file');
  process.exit(1);
}

const app = http.createServer((request, response) => {
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
      if (err) throw new Error('Cannot load the database');
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const headdings = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));
      response.write(`Number of students: ${students.length}\n`);
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
        response.write(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldNames[field].join(', ')}\n`);
      });
      response.end();
    });
  } else if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else {
    response.end();
  }
});
app.listen(1245);
module.exports = app;
