var quoteContainer = document.getElementById("quote");
var authorContainer = document.getElementById("author");

var btn = document.getElementById("btn");



var getQuote = function(){
        var req = new XMLHttpRequest();
        req.open('GET','http://quotes.stormconsultancy.co.uk/popular.json');
        req.onload = function() {
            //parsing the json file as an javascript object notation
            var data = JSON.parse(req.responseText);
            //for getting random quotes 
            let index = Math.ceil(43*Math.random());
            quoteContainer.innerHTML = "";
            authorContainer.innerHTML ="";
            quoteContainer.insertAdjacentHTML('beforeend',data[index].quote);
            authorContainer.insertAdjacentHTML('beforeend',"-- " + data[index].author);
        };
        req.send();
        };
getQuote();
btn.addEventListener("click", function(){getQuote();});
