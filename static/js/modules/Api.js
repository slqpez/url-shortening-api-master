import Ui from "./Api.js";

export default class Api {
  async postLink(link) {
    try {
      const response = await fetch("https://rel.ink/api/links/", {
        method: "POST",
        body: JSON.stringify({ url: link }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 400) {
        throw new Error("Bad response from server");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("Link does not exist.");
    }
  }

  async getData(hash) {
    const response = await fetch(`https://rel.ink/api/links/${hash}`);
    const data = await response.json();
    return data;
  }
}
