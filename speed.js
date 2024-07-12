let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let spinnerEl = document.getElementById("spinner")
let submitEl = document.getElementById("submitBtn");
let resetEl = document.getElementById("resetBtn");
let resultEl = document.getElementById("result");
let timer = document.getElementById("timer");
spinnerEl.classList.toggle("d-none");

let counter = 0
function startCounter(){
    counter +=1;
    timer.textContent = counter;
    console.log(counter)
}

let counterVal = setInterval(startCounter,1000);

function getQuote(){
    let url="https://apis.ccbp.in/random-quote"
    let options={
        method:"GET"
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinnerEl.classList.add("d-none");
        let quote = jsonData.content;
        quoteDisplayEl.textContent = quote;
        console.log( quoteDisplayEl.textContent);
    })
}
getQuote();
startCounter();

resetEl.onclick=function(){
    spinnerEl.classList.remove("d-none");
    getQuote();
    startCounter();
    counter = 0;
    resultEl.textContent = "";
    quoteInputEl.value = "";
};

submitEl.onclick=function(){
    if(quoteInputEl.value === quoteDisplayEl.textContent){
        clearInterval(counterVal);
        resultEl.textContent = "You typed in" + counter + " seconds";
    }else{
        resultEl.textContent = "You typed Incorrect sentence";
    }
};