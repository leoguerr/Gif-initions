var cardContent = document.getElementById("cardContent");
var cardImage = document.getElementById("cardImage");
var moreInfo = document.getElementById("moreInfo");
var phonetics = document.getElementById("phonetics");
var timerMessage = document.getElementById("timerMessage");
var wordsInMotion = document.getElementById("wordsInMotion");
var GiphyAPIKey = "69YdDv5rJNqo0tpHseZP6XyqSihO6MzA";
var search = "";
var words = [
  "Annihilate",
  "Complacent",
  "Conceive",
  "Confine",
  "Demonstrate",
  "Deplete",
  "Deserted",
  "Erratic",
  "Excel",
  "Exhilarating",
  "Frankly",
  "Geriatric",
  "Hostile",
  "Lucrative",
  "Ornate",
  "Petulant",
  "Reluctantly",
  "Scrutinize",
  "Solidarity",
  "Unveil",
  "Contemplate",
  "Dreary",
  "Dubious",
  "Bittersweet",
  "Diminish",
];

var startBtn = document.querySelector("#startbtnMain");
var resultsPage = "./Main.html";
var timeLeft = 5;

// function that pics a random word from words array
function randomWord() {
  search = words[Math.floor(Math.random() * words.length)];
  console.log("search " + search);

  // Code to add new word to an array on local storage
  var pastWords = JSON.parse(localStorage.getItem("pastWords"));
  // if theres no past words array, create one
  if (pastWords == null) {
    pastWords = [];
  }
  // Save current search to local storage
  localStorage.setItem("search", search);

  if (pastWords.length == words.length) {
    // time function to add a message under our start button
    var timeInterval = setInterval(function () {
      timerMessage.textContent =
        "You've seen all the words! Starting you over!";
      timeLeft--;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timeLeft = 5;
        timerMessage.innerHTML = "";
        randomWord();
        FreeDictionaryAPI();
        GiphyAPI();
      }
    }, 1000);

    pastWords = [];
    localStorage.setItem("pastWords", JSON.stringify(pastWords));
    // location.reload();
  } else {
    // Make sure new word has not been searched already
    for (i = 0; i < words.length; i++) {
      if (search == pastWords[i]) {
        randomWord();
      }
    }
  }

  // Add current search to array of past searches
  pastWords.push(search);
  // save new array to local storage
  localStorage.setItem("pastWords", JSON.stringify(pastWords));

  return search;
}

// function to fetch Free Dictionary API
function FreeDictionaryAPI() {
  var requestUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

  console.log("https://api.dictionaryapi.dev/api/v2/entries/en/" + search);

  fetch(requestUrl)
    .then(function (response) {
      // if the the HTTP status code of the response is 404, the user is redirected
      // to 404.html
      if (response.status === 404) {
        window.location.replace("404.html");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      moreInfo.innerHTML = "";
      cardContent.textContent = "";
      phonetics.innerHTML = "";

      // returns the searched word
      var cardContentWord = document.createElement("h5");
      cardContentWord.textContent = data[0].word;
      cardContent.append(cardContentWord);

      for (var i = 0; i < data[0].meanings.length; i++) {
        // returns the definitions of the searched word
        var definitionsArray = data[0].meanings[i].definitions;
        definitionsArray.forEach((definition) => {
          var definitions = document.createElement("h6");
          definitions.textContent = definition.definition;

          moreInfo.append(definitions);
        });
      }

      // returns the pronunciation of the searched word
      var pronunciation = document.createElement("h6");
      pronunciation.textContent = data[0].phonetics[0].text;
      phonetics.append(pronunciation);

      var linebreak = document.createElement("br");
      phonetics.appendChild(linebreak);

      // returns the related pronunciation audio file
      var audio = document.createElement("audio");
      var controls = document.createAttribute("controls");
      audio.setAttributeNode(controls);

      var source = document.createElement("source");
      source.src = "https:" + data[0].phonetics[0].audio;
      source.type = "audio/mpeg";

      phonetics.append(audio);
      audio.appendChild(source);
    });
}

// function to fetch GIPHY API
function GiphyAPI() {
  var requestUrl =
    "https://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&api_key=" +
    GiphyAPIKey +
    "&limit=26";

  console.log(
    "https://api.giphy.com/v1/gifs/search?q=" +
      search +
      "&api_key=" +
      GiphyAPIKey +
      "&limit=26"
  );

  fetch(requestUrl)
    .then(function (response) {
      // if the the HTTP status code of the response is 404, the user is redirected
      // to 404.html
      if (response.status === 404) {
        window.location.replace("404.html");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data.data);
      wordsInMotion.innerHTML = "";

      // returns first related gif
      cardImage.src = data.data[0].images.fixed_width.url;

      // this returns the image url of the following 25 related gifs
      for (var i = 1; i < data.data.length; i++) {
        var img = document.createElement("img");
        img.src = data.data[i].images.fixed_height.url;
        img.style.margin = "10px";

        wordsInMotion.append(img);
      }
    });
}

randomWord();
FreeDictionaryAPI();
GiphyAPI();

startBtn.addEventListener("click", function () {
  randomWord();
  FreeDictionaryAPI();
  GiphyAPI();
});

//collapsable initiation
$(document).ready(function () {
  $(".collapsible").collapsible();
});

// Side nav initiation
$(document).ready(function(){
  $('.sidenav').sidenav();
});