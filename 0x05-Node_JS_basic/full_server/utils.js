import fs from 'fs';

function readDatabase(filePath) {
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
      const sortedFields = Object.keys(fieldCounts)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      // Build the response text
      sortedFields.forEach((field) => {
        responseText.push(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldNames[field].join(', ')}`);
      });

      resolve({ responseText, fieldNames });
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
