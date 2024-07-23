const fs = require('fs');

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

      console.log(`Number of students: ${students.length}`);

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
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldNames[field].join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
