const sum = (total, grade) => total + grade;

function getGrade(...args) {
  let average = args.reduce(sum, 0) / args.length;

  if (average >= 90 && average <= 100) {
    console.log("A");
  } else if (average >= 80) {
    console.log("B");
  } else if (average >= 70) {
    console.log("C");
  } else if (average >= 60) {
    console.log("D");
  } else if (average >= 0) {
    console.log("F");
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"