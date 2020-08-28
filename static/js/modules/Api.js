export default class Api {
  static fetchData() {
    fetch("https://rel.ink/api/links/", {
      method: "POST",
      body: JSON.stringify({ url: "https://twitter.com/home" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

Api.fetchData();
