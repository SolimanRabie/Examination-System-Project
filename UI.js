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
    this.submitBtn = document.querySelector(".submit");
    this.timeElement = document.getElementById("time");
    this.time = 300;
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

    if (this.exam.currentIndex === 0) {
      this.previousBtn.style.display = "none";
    } else {
      this.previousBtn.style.display = "inline-block";
    }
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

    // submit
    this.submitBtn.addEventListener("click", () => {
      this.goResult();
    });
  }

  goResult() {
    let score = 0;
    this.exam.questions.forEach((q, i) => {
      if (q.checkAnswer(this.exam.answers[i])) {
        score++;
      }
    });
    window.location.href = `result.html?score= ${score}`;
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
      div.style.cursor = "pointer";
      div.addEventListener("click", () => {
        this.exam.currentIndex = index;
        this.renderQuestion();
      });
      this.markContainer.appendChild(div);
    });
  }

  startTimer() {
    const interval = setInterval(() => {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;

      this.timeElement.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      // this.timeElement.style.color = "red";
      if (this.time <= 60) {
        document.querySelector(".timer").classList.add("warning");
      }
      this.time--;

      if (this.time < 0) {
        clearInterval(interval);
        this.goResult();
      }
    }, 1000);
  }
}
