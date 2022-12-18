// Set up variables
let currentQuestion = 0;
const questions = [
  {
    question: "What is the chemical symbol for oxygen?",
    choices: ["O", "H", "C", "N"],
    correctAnswer: "a"
  },
  {
    question: "What is the capital of Italy?",
    choices: ["Paris", "London", "Rome", "Madrid"],
    correctAnswer: "c"
  },
  {
    question: "What is the largest ocean in the world?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "d"
  },
  {
    question: "What is the capital of Russia?",
    choices: ["Berlin", "London", "Moscow", "Madrid"],
    correctAnswer: "c"
  },
  {
    question: "What is the national animal of Scotland?",
    choices: [ "Lion", "Tiger", "Panda", "Unicorn"],
    correctAnswer: "d"
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Michelangelo", "Rapheal", "Vinci van Gogh"],
    correctAnswer: "a"
  },
  {
    question: "What is the largest planet in the solar system?",
    choices: ["Uranus", "Jupiter", "Neptune", "Earth"],
    correctAnswer: "b"
  },
  {
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
    correctAnswer: "a"
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Dollar", "Euro", "Pound"],
    correctAnswer: "a"
  },
  {
    question: "What is the highest mountain in the world?",
    choices: [ "Kilimanjaro", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: "c"
  },
];
// Shuffle questions
questions.sort(function() {
  return Math.random() - 0.5;
})

for(let i = 0; i < questions.length; i++) {
  console.log(questions[i]);
}
// Set up timer
let timer = 100;
const timerInterval = setInterval(() => {
  timer--;
  document.getElementById("timer").innerHTML = `Time remaining: ${timer} seconds`;
  if (timer === 0) {
    clearInterval(timerInterval);
    alert("Time's up!");
  }
}, 1000);
// Display first question
document.getElementById("quiz-form").innerHTML = `
  <h2>Question ${currentQuestion + 1}</h2>
  <p>${questions[currentQuestion].question}</p>
  <label><input type="radio" name="q${currentQuestion}" value="a">${questions[currentQuestion].choices[0]}</label><br>
  <label><input type="radio" name="q${currentQuestion}" value="b">${questions[currentQuestion].choices[1]}</label><br>
  <label><input type="radio" name="q${currentQuestion}" value="c">${questions[currentQuestion].choices[2]}</label><br>
  <label><input type="radio" name="q${currentQuestion}" value="d">${questions[currentQuestion].choices[3]}</label><br>
  <button type="button" onclick="nextQuestion()">Next</button>
`;
let score = 0;
// Next question function
function nextQuestion() {
  // Get selected answer
  const answer = document.querySelector(`input[name=q${currentQuestion}]:checked`).value;

  // Check if answer is correct
  if (answer === questions[currentQuestion].correctAnswer) {
    
    document.getElementById('correct').play()
    score++;
  } else {
    document.getElementById('incorrect').play()
    score--;
  }

  // Increase current question index
  currentQuestion++;

  // Check if there are more questions
  if (currentQuestion >= questions.length) {
    // End quiz
    if(score >= 8) {
      alert("Congratulations!  👏👏")
    }else if(score < 5){
      alert("Oops! Try again 😱😱")
    }
    document.getElementById("quiz-form").innerHTML = "";
    document.getElementById("timer").innerHTML = "";
    let finalScore = document.getElementById("score");
    finalScore.style.fontSize = "2rem";
    document.getElementById("score").innerHTML = `Score: ${score}/${questions.length}`;
    clearInterval(timerInterval);
    timer = 60;
    return;
    
  }
  // Display next question
  document.getElementById("quiz-form").innerHTML = `
    <h2>Question ${currentQuestion + 1}</h2>
    <p>${questions[currentQuestion].question}</p>
    <label><input type="radio" name="q${currentQuestion}" value="a">${questions[currentQuestion].choices[0]}</label><br>
    <label><input type="radio" name="q${currentQuestion}" value="b">${questions[currentQuestion].choices[1]}</label><br>
    <label><input type="radio" name="q${currentQuestion}" value="c">${questions[currentQuestion].choices[2]}</label><br>
    <label><input type="radio" name="q${currentQuestion}" value="d">${questions[currentQuestion].choices[3]}</label><br>
    <button type="button" onclick="nextQuestion()">Next</button>
  `;
}