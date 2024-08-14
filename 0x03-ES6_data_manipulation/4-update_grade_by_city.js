export default function updateStudentGradeByCity(students, city, newGrads) {
  const targetStudents = students.filter((student) => student.location === city);

  targetStudents.map((student) => {
    const studentGrade = newGrads.filter((grade) => grade.studentId === student.id)[0];
    if (studentGrade) {
      Object.assign(student, { grade: studentGrade.grade });
    } else {
      Object.assign(student, { grade: 'N/A' });
    }
    return students;
  });
  return targetStudents;
}
