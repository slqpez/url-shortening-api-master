export default class Api {
  static async fetchData() {
    const response = await fetch("https://rel.ink/api/links/", {
      method: "POST",
      body: JSON.stringify({ url: "https://twitter.com/home" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
}

const uno = Api.fetchData();

uno.then((res) => {
  console.log(res);
});
