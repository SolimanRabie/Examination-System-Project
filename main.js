export class Question {
  constructor(text, choices, correct) {
    this.text = text;
    this.choices = choices;
    this.correct = correct;
  }

  checkAnswer(answerIndex) {
    return answerIndex === this.correct;
  }
}
