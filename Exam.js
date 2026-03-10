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
    // if (!this.marked.includes(this.currentIndex)) {
    //   this.marked.push(this.currentIndex);
    // }
    // if(this.marked.length!==0){

    // }

    const index = this.currentIndex;
    const pos = this.marked.indexOf(index); // return 1 if exist and return -1 if not exist

    if (pos !== -1) {
      // remove mark
      this.marked.splice(pos, 1);
    } else {
      this.marked.push(index);
    }
  }

  getProgress() {
    // return ((this.currentIndex + 1) / this.questions.length) * 100;
    const answer = this.answers.filter((a) => a !== null).length;
    return (answer / this.questions.length) * 100;
  }
}
