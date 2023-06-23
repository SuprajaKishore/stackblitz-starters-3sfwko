// Example array of student objects
const students = [
  { name: 'John', chemistryMarks: 80, biologyMarks: 90, dob: '01-01-2000' },
  { name: 'Jane', chemistryMarks: 75, biologyMarks: 85, dob: '02-02-2000' },
  { name: 'Alice', chemistryMarks: 80, biologyMarks: 85, dob: '03-03-2000' },
  // Add more student objects here
];

// Custom comparison function for sorting
function compareStudents(student1, student2) {
  // First priority: Total marks
  const totalMarksDiff =
    student2.chemistryMarks +
    student2.biologyMarks -
    (student1.chemistryMarks + student1.biologyMarks);
  if (totalMarksDiff !== 0) {
    return totalMarksDiff;
  }

  // Second priority: Biology marks
  const biologyMarksDiff = student2.biologyMarks - student1.biologyMarks;
  if (biologyMarksDiff !== 0) {
    return biologyMarksDiff;
  }

  // Third priority: Date of birth (assuming date strings are in DD-MM-YYYY format)
  const dob1 = new Date(student1.dob.split('-').reverse().join('-'));
  const dob2 = new Date(student2.dob.split('-').reverse().join('-'));
  return dob1 - dob2;
}

// Sort the array of students using the custom comparison function
students.sort(compareStudents);

// Print the sorted array
console.log(students);
