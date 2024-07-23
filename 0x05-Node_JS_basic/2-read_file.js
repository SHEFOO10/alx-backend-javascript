const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the data into lines
    const lines = data.trim().split('\n');

    // Extract the headers and students' data
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    // Initialize student counts by field
    const fieldCounts = {};
    const fieldNames = {};

    // Process each student
    students.forEach((student) => {
      // Skip empty lines
      if (student.length !== headers.length) return;

      const field = student[3];
      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldNames[field] = [];
      }
      fieldCounts[field] += 1;
      fieldNames[field].push(student[0]);
    });

    // Calculate total number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students and their names for each field
    Object.keys(fieldCounts).forEach((field) => {
      const names = fieldNames[field].join(', ');
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${names}`);
    });
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
