export default class Ui {
  constructor() {
    this.link;
  }
  getLink() {
    this.link = document.querySelector(".input-link");
    return this.link.value;
  }

  isEmpty() {
    if (this.getLink() === "") {
      return true;
    } else {
      return false;
    }
  }
  showError(msg) {
    const input = document.querySelector(".input-link");
    const inputContainer = document.querySelector(".input-container");
    input.style.border = "3px solid hsl(0, 87%, 67%)";
    const msgP = document.createElement("p");
    if (!document.querySelector(".error")) {
      msgP.classList.add("error");
      msgP.textContent = msg;
      inputContainer.appendChild(msgP);
    }
  }

  isCorrect() {
    const input = document.querySelector(".input-link");
    const msg = document.querySelector(".error");
    if (document.querySelector(".error")) msg.remove();
    input.style.border = "2px solid green";
  }
}
