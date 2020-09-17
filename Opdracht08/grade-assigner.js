function assignGrade(score) {
  if (score > 90) {
      return 'A';
  } else if (score > 80) {
      return 'B';
  } else if (score > 70) {
      return 'C';
  } else if (score > 65) {
      return 'D';
  } else {
      return 'F';
  }
}

const testResults = () => {
for (score = 60; score <=100; score++) {
  let grade = assignGrade(score);
  console.log(`Voor ${score} punten, krijg je een ${grade}.`)
}
};

testResults();