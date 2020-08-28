export default class Ui {
  static get link() {
    const $link = document.querySelector(".input-link");
    console.log(this.isEmpty($link));
  }

  static isEmpty(input) {
    input.addEventListener("blur", () => {
      if (input.value === "") this.showError(input, "Please add a link");
      else {
        this.isCorrect(input);
      }
    });
  }
  static showError(input, msg) {
    const inputContainer = document.querySelector(".input-container");
    input.style.border = "3px solid hsl(0, 87%, 67%)";
    const msgP = document.createElement("p");
    if (!document.querySelector(".error")) {
      msgP.classList.add("error");
      msgP.textContent = msg;
      inputContainer.appendChild(msgP);
    }
  }

  static isCorrect(input) {
    const msg = document.querySelector(".error");
    if (document.querySelector(".error")) msg.remove();
    input.style.border = "2px solid green";
  }
}

Ui.link;
