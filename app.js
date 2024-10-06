const Question = document.getElementById("Question");
const QuestionBar = document.getElementById("QuestionBar");
let btns = document.querySelectorAll(".btn");
const numQuestion = document.getElementById("numQuestion");
const score = document.getElementById("score");
const option = document.querySelectorAll(".btn");
const Next = document.getElementById("Next");
const start = document.getElementById("start");
const result = document.getElementById("result");
const time = document.getElementById("time");
const label = document.getElementById("label");
const studentName = document.getElementById("studentName");
const scoreSection = document.getElementById("scoreSection");

let interval;
let questions,
  scoreCount = 0,
  currentQuestionIndex = 0,
  studentFullname,
  timeline;

scoreSection.classList.add("hidden");

start.addEventListener("click", () => {
  if (studentName.value === "") {
    label.innerText = "Enter your Name";
  } else {
    studentFullname = studentName.value;
    setQuestion();
    showTime();
    start.classList.add("hidden");
    label.classList.add("hidden");
    studentName.classList.add("hidden");
    QuestionBar.classList.remove("hidden");
    Next.classList.remove("hidden");
  }
});

function setQuestion() {
  clearInterval(interval);

  if (currentQuestionIndex < 10) {
    const questionData = mathQuiz[currentQuestionIndex];
    numQuestion.innerText = `Question ${currentQuestionIndex + 1}/10`;
    Question.innerText = questionData.question;

    btns.forEach((btn, index) => {
      btn.textContent = questionData.options[index];
      btn.style.backgroundColor = "white"; // Reset colors
      btn.style.pointerEvents = "auto"; // Enable buttons
      btn.onclick = () => checkAnswer(index);
    });
  } else {
    showscore();
    scoreSection.classList.remove("hidden");
    QuestionBar.classList.add("hidden");
    Next.classList.add("hidden");
  }
}

function showTime() {
  timeline = 20;
  time.textContent = `Time: ${timeline}`;

  interval = setInterval(() => {
    timeline--;
    time.textContent = `Time: ${timeline}`;
    if (timeline < 0) {
      clearInterval(interval);
      Next.click(); // Move to next question automatically
    }
  }, 1000);
}

function checkAnswer(selectedAnswerIndex) {
  const correctAnswerIndex = mathQuiz[currentQuestionIndex].correctAnswer;

  btns.forEach((btn) => {
    btn.style.pointerEvents = "none"; // Disable further clicks
  });

  if (selectedAnswerIndex === correctAnswerIndex) {
    btns[selectedAnswerIndex].style.backgroundColor = "green";
    scoreCount++;
  } else {
    btns[selectedAnswerIndex].style.backgroundColor = "red";
    btns[correctAnswerIndex].style.backgroundColor = "green";
  }
}

Next.addEventListener("click", () => {
  currentQuestionIndex++;
  setQuestion();
  showTime();
});

function showscore() {
  score.innerText = `Score: ${scoreCount}/10`;
  if (scoreCount >= 6) {
    result.innerText = `${studentFullname} Passed`;
    result.style.color = "green";
  } else {
    result.innerText = `${studentFullname} Failed`;
    result.style.color = "red";
  }
}
