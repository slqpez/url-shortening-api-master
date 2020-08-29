import "./utils/navbar.js";
import Ui from "./modules/Ui.js";
import Api from "./modules/Api.js";

const $btn = document.querySelector(".btn-input-link");
$btn.addEventListener("click", initApp);

function initApp(e) {
  const uiData = new Ui();
  if (uiData.isEmpty()) {
    uiData.showError("Please add a link.");
  } else {
    uiData.isCorrect();
    const link = uiData.getLink();
    const api = new Api();
    const hash = api.postLink(`${link}`);
    hash.then((res) => {
      if (res === undefined) {
        uiData.showError("Link does not exist.");
      }
    });
  }

  e.preventDefault();
}
