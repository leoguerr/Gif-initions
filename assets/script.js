// var search = document.getElementById("searchResults").value;
var GiphyAPIKey = "69YdDv5rJNqo0tpHseZP6XyqSihO6MzA";
var search = "";
var words = [
  "Annihilate",
  "Complacent",
  "Conceive",
  "Confine",
  "Demonstrate",
  "Deplete",
  "Desolate",
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

function randomWord() {
  search = words[Math.floor(Math.random() * words.length)];
  console.log("search " + search);
  return search;
}

randomWord();

// function to fetch Free Dictionary API
function FreeDictionaryAPI() {
  var requestUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

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

      // returns the searched word
      var word = document.createElement("p");
      word.textContent = data[0].word;
      wordInfo.append(word);

      // returns the pronunciation of the searched word
      var pronunciation = document.createElement("p");
      pronunciation.textContent = data[0].phonetics[0].text;
      wordInfo.append(pronunciation);

      // returns the related pronunciation audio file
      var audio = document.createElement("audio");
      var controls = document.createAttribute("controls");
      audio.setAttributeNode(controls);

      var source = document.createElement("source");
      source.src = "https:" + data[0].phonetics[0].audio;
      source.type = "audio/mpeg";

      wordInfo.append(audio);
      audio.appendChild(source);

      for (var i = 0; i < data[0].meanings.length; i++) {
        // returns whether the searched word is a noun, verb, etc.
        var partOfSpeech = document.createElement("p");
        partOfSpeech.textContent = data[0].meanings[i].partOfSpeech;

        wordInfo.append(partOfSpeech);

        // returns the definitions of the searched word
        var definitionsArray = data[0].meanings[i].definitions;
        definitionsArray.forEach((definition) => {
          var definitions = document.createElement("p");
          definitions.textContent = definition.definition;

          wordInfo.append(definitions);
        });
      }
    });
}

// function to fetch GIPHY API
function GiphyAPI() {
  var requestUrl =
    "http://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&api_key=" +
    GiphyAPIKey +
    "&limit=25";

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
      // this returns the image url of the first 25 related gifs
      for (var i = 0; i < data.data.length; i++) {
        var cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card");
        cardDiv.style.margin = "10px";

        var cardImg = document.createElement("div");
        cardImg.setAttribute("class", "card-image");

        var img = document.createElement("img");
        img.src = data.data[i].images.fixed_height.url;

        cardSection.append(cardDiv);
        cardDiv.append(cardImg);
        cardImg.append(img);
      }
    });
}

FreeDictionaryAPI();
GiphyAPI();
