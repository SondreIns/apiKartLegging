// int float double etc = number

console.log("schmee");

const baseUrl = "https://ghibliapi.vercel.app"
async function getApi() {
    const fullUrl = baseUrl + "/films"

    const res = await fetch(fullUrl)
    const data = await res.json()
    createGhibliCard(data)
}

getApi();

const ghibliContainer = document.getElementById("ghibli-cont")
function createGhibliCard(Ghibli) {
    Ghibli.forEach(data => {
            ghibliContainer.innerHTML += 
            `<div>
                <img src =${data.image}
            </div>`
        
    });
}