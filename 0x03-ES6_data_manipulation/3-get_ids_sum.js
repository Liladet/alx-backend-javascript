export default function getStudentIdsSum(students) {
  return students.reduce((preVal, student) => preVal + student.id, 0);
}
