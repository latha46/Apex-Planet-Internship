const questions = [
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    correct: 0
  },
  {
    question: "Which HTML tag is used to link JavaScript?",
    options: ["<script>", "<js>", "<javascript>"],
    correct: 0
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/*", "#"],
    correct: 0
  },
  {
    question: "Which property is used to change text color in CSS?",
    options: ["color", "text-color", "font-color"],
    correct: 0
  },
  {
    question: "Inside which HTML element do we put the CSS?",
    options: ["<style>", "<css>", "<script>"],
    correct: 0
  },
  {
    question: "Which method is used to select an element in JS?",
    options: ["getElementById()", "queryStyle()", "selectElement()"],
    correct: 0
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  const questionDiv = document.getElementById("question");
  questionDiv.innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (index === q.correct) score++;
      nextQuestion();
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Quiz Completed!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("score").innerText = `Your score: ${score}/${questions.length}`;
  }
}

showQuestion();
