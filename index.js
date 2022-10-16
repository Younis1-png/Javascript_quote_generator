// https://jacintodesign.github.io/quotes-api/data/quotes.json

const quoteContainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
// const newQuote = document.getElementById("quote-container");

//Show new quote
function newQuote() {
  const randomQuote = apiQuote[Math.floor(Math.random() * apiQuote.length)];

  // set change the text
  quote.innerText = randomQuote.text;
  // set the author
  author.innerText = randomQuote.author;
}

let apiQuote = [];
// get quote function
async function getQuote() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

// Onload

getQuote();
