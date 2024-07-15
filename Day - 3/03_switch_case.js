// Task - 4: Use switch case to determine the day of the week based on a number (1-7)

const day = 3;

switch (day) {
  case 1:
    console.log(`It's Monday`);
    break;
  case 2:
    console.log(`It's Tuesday`);
    break;
  case 3:
    console.log(`It's Wednesday`);
    break;
  case 4:
    console.log(`It's Thursday`);
    break;
  case 5:
    console.log(`It's Friday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 7:
    console.log(`It's Sunday`);
    break;
  default:
    console.log(
      "Invalid weekday number. Please enter a number between 1 and 7."
    );
    break;
}

// Task - 5: Assign a grade ('A', 'B', 'C', 'D', 'F')

let score = 85;
let grade;

switch (true) {
  case (score >= 90):
    grade = "A";
    break;
  case (score >= 80):
    grade = "B";
    break;
  case (score >= 70):
    grade = "C";
    break;
  case (score >= 60):
    grade = "D";
    break;
  default:
    grade = "F";
    break;
}

console.log(`Score: ${score}, Grade: ${grade}`);
