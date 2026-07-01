function checkGrade() {
    const score = Number(document.getElementById("score").value);
    const Result = document.getElementById("gradeResult");

    // 1. validate the input with if statement
    if (isNaN(score) || score < 0 || score > 100) {
        Result.textContent = "Please enter a number between 0 and 100.";
        return; //break or this conditional statement stops entire code if the input is invalid
    }

    // 2. decide the grade
    let grade;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "A";
        } else if (score >= 70) {
        grade = "A";
        } else if (score >= 60) {
        grade = "B";
        } else if (score >= 50) {
        grade = "C";
        } else if (score >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }


    Result.textContent = "Score" + " " + score + " = Grade " + grade;
} //or Result.textContent = `Score: ${score}, Grade: ${grade}`;

function calculate() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const result = document.getElementById("gradeResult");

    let answer;

    switch (operator) {
        case "+":
            answer = a + b;
            break;
            case "-":
            answer = a - b;
            break;
            case "*":
            answer = a * b;
            break;
            case "/":
            answer = a / b;
            break;

            default:
            result.textContent = "Unknown operation";
            return;
    }

    result.textContent = a + " " + operator + " " + b + " = " + answer;
}


console.log("Are You Here?");