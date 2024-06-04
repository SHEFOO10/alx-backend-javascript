export default function getStudentIdsSum(students) {
  return students.reduce((previousId, student) => previousId + student.id, 0);
}
