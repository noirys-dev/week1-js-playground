async function getRandomQuote() {
    try{
        const response = await fetch("https://dummyjson.com/quotes/random");

        if(!response.ok){
            throw new Error("API request failed");
        }

        const data = await response.json();

        return {
            content: data.quote,
            author: data.author
        };
    }
    catch(error){
        console.log("Error inside getRandomQuote:", error.message);
        throw error;
    }
}

async function run() {
    try{
        const quote = await getRandomQuote();
        console.log(`"${quote.content}" - ${quote.author}`);
    }
    catch(error){
        console.log("Caught in run:", error.message);
    }
}

run();

