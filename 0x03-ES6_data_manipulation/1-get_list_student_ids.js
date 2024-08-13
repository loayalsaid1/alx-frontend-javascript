export default function getListStudentsIds(students) {
  const IDs = [];

  if (students instanceof Array) {
    students.map((student) => IDs.push(student.id));
  }

  return IDs;
}
