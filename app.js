// int float double etc = number

console.log("schmee");

const baseUrl = "https://ghibliapi.vercel.app";
async function getApi() {
  const fullUrl = baseUrl + "/films";

  const res = await fetch(fullUrl);
  const data = await res.json();
  const test = [data[20]];
  createGhibliCard(test);
}

getApi();

const ghibliContainer = document.getElementById("ghibli-cont");
function createGhibliCard(Ghibli) {
  Ghibli.forEach((data) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("h4");

    title.textContent = data.title;

    img.src = data.image;
    description.textContent = data.description;
    div.append(title, img, description);
    ghibliContainer.append(div);
  });
}

// setTimeout((e) => {
//   console.log("5sek");
// }, 5000);

// setInterval((e) => {
//   console.log("1sek");
// }, 1000);
