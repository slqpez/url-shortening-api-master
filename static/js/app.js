import "./utils/navbar.js";
import Ui from "./modules/Ui.js";

const $btn = document.querySelector(".btn-input-link");
$btn.addEventListener("click", initApp);

function initApp(e) {
  if (Ui.isEmpty()) {
    Ui.showError("Please add a link");
  } else {
    Ui.isCorrect();
    //Inicializar api para generar el short link
  }

  e.preventDefault();
}
