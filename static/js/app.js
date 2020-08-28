import "./utils/navbar.js";
import Ui from "./modules/Ui.js";
import Api from "./modules/Api.js";

const $btn = document.querySelector(".btn-input-link");
$btn.addEventListener("click", initApp);

function initApp(e) {
  const link = new Ui();
  if (link.isEmpty()) {
    link.showError("Please add a link");
  } else {
    link.isCorrect();
    //Inicializar api para generar el short link
  }

  e.preventDefault();
}
