import { Question } from "./Question.js";
import { Exam } from "./Exam.js";
import { UI } from "./UI.js";
const questions = [
  new Question("What is your fav color?", ["Red", "Blue", "Green", "Black"], 1),

  new Question("2 + 2 = ?", ["2", "3", "4", "5"], 2),

  new Question("Best JS runtime?", ["Node", "Deno", "Bun", "All"], 3),
];

const exam = new Exam(questions);
const ui = new UI(exam);

ui.renderQuestion();
ui.events();
ui.renderMark();
