export default class Api {
  static fetchData() {
    fetch("https://rel.ink/api/links/Nn8y9p/", {
      method: "POST",
      url: "https://twitter.com/home",
    }).then((res) => res.json().then((response) => console.log(response)));
  }

  static test() {
    console.log("lptm");
  }
}

Api.fetchData();
