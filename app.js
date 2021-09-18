var btnTranslate = document.querySelector("#btn-translate")
var btnInput = document.querySelector("#txt-input")
var btnOutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslate(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    alert("something wrong")
}

function clickHandler(){
    var inputText = btnInput.value;
    fetch(getTranslate(inputText))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            btnOutput.innerText = translatedText;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)

