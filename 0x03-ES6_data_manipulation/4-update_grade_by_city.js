/* eslint no-param-reassign: ["error", { "props": false}] */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    newGrades.forEach((gradeObject) => {
      if (gradeObject.studentId === student.id) {
        student.grade = gradeObject.grade;
      }
    });
    if (student.grade === undefined) {
      student.grade = 'N/A';
    }
    return student;
  });
}
