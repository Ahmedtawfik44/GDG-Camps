const btnGenerate = document.querySelector("#btn-generator");
btnGenerate.addEventListener("click", generateQuote);
function generateQuote() {
    const myQuote = document.querySelector("#quote");
    myQuote.innerText = fetchQuote();
}


function fetchQuote() {
    let quotes = "The only way to do great work is to love what you do.Believe you can and you're halfway there.Success is not final, failure is not fatal: It is the courage to continue that counts.Your time is limited, don't waste it living someone else's life.The best way to predict the future is to create it"

    let quotesArray= quotes.split('.'); 

    let randomIndexInQuotsArray=Math.floor(Math.random() * quotesArray.length);  
    return quotesArray[randomIndexInQuotsArray];
}