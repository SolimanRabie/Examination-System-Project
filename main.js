const isResultPage = window.location.pathname.includes("result.html");
if (isResultPage) {
  const params = new URLSearchParams(window.location.search);
  const fname = localStorage.getItem("firstName");
  const lname = localStorage.getItem("lastName");
  const nameElement = document.getElementById("studentName");
  const scoreElement = document.getElementById("studentScore");
  if (nameElement && scoreElement) {
    nameElement.textContent = fname + " " + lname || "Student";
    scoreElement.innerHTML = score + " <span class='fullScore'>/ 8</span>";
  }
}

import { Question } from "./Question.js";
import { Exam } from "./Exam.js";
import { UI } from "./UI.js";
const questions = [
  new Question("What is your fav color?", ["Red", "Blue", "Green", "Black"], 1),

  new Question("2 + 2 = ?", ["2", "3", "4", "5"], 2),
  new Question("3 + 3 = ?", ["2", "3", "4", "6"], 3),

  new Question("Best JS runtime?", ["Node", "Deno", "Bun", "All"], 3),
  new Question(
    "what repersent the page stracture?",
    ["css", "js", "html", "none of the above"],
    3,
  ),
  new Question("10 + 15= ?", ["20", "25", "40", "30"], 1),
  new Question(" JS refer to?", ["javascript", "c++", "c", "java"], 0),
  new Question(
    " let result = 3 + 2 + 7;\nconsole.log(result);\nresult=?",
    ["10", "13", "12", "33"],
    2,
  ),
];

const exam = new Exam(questions);
const ui = new UI(exam);

ui.renderQuestion();
ui.events();
ui.renderMark();
ui.startTimer();
