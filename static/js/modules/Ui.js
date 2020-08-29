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
    } else {
      const pError = document.querySelector(".error");
      pError.remove();
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

  showSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner.style.display = "block";
  }

  removeSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner.style.display = "none";
  }

  showCard(link, hash) {
    const outputCard = document.querySelector(".output-links");
    const card = document.createElement("div");
    card.classList.add("card-output-link");
    card.innerHTML = `<header class="header-card">${link}</header>
            <div class="content">
              <p class="short-link" id="short" >https://rel.ink/${hash}</p>
              <a href="#" class="copy-btn">Copy</a>
            </div>`;

    outputCard.appendChild(card);
  }

  clearInput() {
    const input = document.querySelector(".input-link");
    input.value = "";
  }
}
