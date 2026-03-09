export class UI {
  constructor(exam) {
    this.exam = exam;
    this.questionText = document.querySelector(".question__qc");
    this.labels = document.querySelectorAll(".form-check-label");
    this.radios = document.querySelectorAll(".form-check-input");

    this.nextBtn = document.querySelector(".btn-outline-primary");
    this.previousBtn = document.querySelector(".btn-outline-secondary");
    this.markBtn = document.querySelector(".btn-outline-warning");

    this.progress = document.querySelector(".progress-bar");
    this.markContainer = document.querySelector(".change__markQ");
  }

  renderQuestion() {
    const q = this.exam.getCurrentQuestion();
    this.questionText.textContent = q.text;

    this.labels.forEach((lable, i) => {
      lable.textContent = q.choices[i];

      this.radios[i].checked = this.exam.answers[this.exam.currentIndex] === i;

      // if (this.exam.answers[this.exam.currentIndex] === i) {
      //   this.radios[i].checked = true;
      // } else {
      //   this.radios[i].checked = false;
      // }
    });
    this.updateProgress();
  }

  updateProgress() {
    this.progress.style.width = this.exam.getProgress() + "%";
  }

  events() {
    // save choise
    this.radios.forEach((radio, i) => {
      radio.addEventListener("change", () => {
        this.exam.saveAnswer(i);
      });
    });

    // click next
    this.nextBtn.addEventListener("click", () => {
      this.exam.next();
      this.renderQuestion();
    });

    // click previous
    this.previousBtn.addEventListener("click", () => {
      this.exam.prev();
      this.renderQuestion();
    });

    // click mark
    this.markBtn.addEventListener("click", () => {
      this.exam.markQuestion();
      this.renderMark();
    });
  }

  // mark view
  renderMark() {
    this.markContainer.innerHTML = "";

    if (this.exam.marked.length === 0) {
      this.markContainer.style.display = "none";
      return;
    }

    this.markContainer.style.display = "block";

    this.exam.marked.forEach((index) => {
      const div = document.createElement("div");
      div.textContent = `Question ${index + 1}`;
      div.classList.add("marked-question");
      ///
      div.addEventListener("click", () => {
        this.renderQuestion();
      });
      this.markContainer.appendChild(div);
    });
  }
}
