const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log("\n Thank you for answering my questions. Displayed below are your answers with the correct answer below it.")
  let candidateAnswersUpperCase = String(candidateAnswers).toUpperCase().split(",");
  let correctAnswersUpperCase = String(correctAnswers).toUpperCase().split(",");

  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswersUpperCase[i] === correctAnswersUpperCase[i]) {
      console.log(`\n That's correct! \n Your answer: ${candidateAnswers[i]} \n Correct answer: ${correctAnswers[i]}`);
    } else {
      console.log(`\n That's incorrect. \n Your answer: ${candidateAnswers[i]} \n Correct answer: ${correctAnswers[i]}`);
    }
  }



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let numOfCorrectAnswers = 0;
  for (let index = 0; index < questions.length; index++) {
    if (candidateAnswersUpperCase[index] === correctAnswersUpperCase[index]) {
      numOfCorrectAnswers++;
    }
  }
  grade = numOfCorrectAnswers / questions.length * 100;
  if (grade > 79) {
    console.log(`\n Congratulations. You passed the quiz with a ${grade}% (${numOfCorrectAnswers} out of ${questions.length} questions correct)`);
  } else {
    console.log(`\n You failed. Your score was ${grade}% (${numOfCorrectAnswers} out of ${questions.length} questions correct)`);
  }


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log('Hello', candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};