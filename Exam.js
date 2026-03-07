export class Exam {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.answers = new Array(questions.length).fill(null);
    this.marked = [];
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  saveAnswer(answerIndex) {
    this.answers[this.currentIndex] = answerIndex;
  }

  markQuestion() {
    if (!this.marked.includes(this.currentIndex)) {
      this.marked.push(this.currentIndex);
    }
  }

  getProgress() {
    return ((this.currentIndex + 1) / this.questions.length) * 100;
  }
}
