const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    getQuote(apiUrl)
})
async function getQuote (url) {
    const response = await fetch(url);
    var data = await response.json();
   
    quote.innerHTML = data.content;
    author.innerHTML = data.author
}

getQuote(apiUrl)