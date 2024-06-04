export default function getListStudentIds(Students) {
  if (!Array.isArray(Students)) {
    return [];
  }

  const StudentIds = Students.map((student) => student.id);

  return StudentIds;
}
