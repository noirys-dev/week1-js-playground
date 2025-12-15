function getRandomQuote() {
  return fetch("https://dummyjson.com/quotes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return {
        content: data.quote,
        author: data.author,
      };
    });
}

getRandomQuote().then((quote) => {
  console.log(`"${quote.content}" — ${quote.author}`);
});