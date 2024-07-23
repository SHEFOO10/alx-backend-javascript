const http = require('http');
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

const app = http.createServer((request, response) => {
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(DB_FILE).then((responseData) => {
      response.write(responseData.join('\n'));
      response.end();
    }).catch((err) => {
      response.write(err.join('\n'));
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
