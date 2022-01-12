// var search = document.getElementById("searchResults").value;
var GiphyAPIKey = "69YdDv5rJNqo0tpHseZP6XyqSihO6MzA";
var search = "dog";
var words = ["Annihilate", "Complacent", "Conceive", "Confine", "Demonstrate", "Deplete", "Desolate", "Erratic", "Excel", "Exhilarating", "Frankly", "Geriatric", "Hostile", "Lucrative", "Ornate", "Petulant", "Reluctantly", "Scrutinize", "Solidarity", "Unveil", "Contemplate", "Dreary", "Dubious", "Bittersweet", "Diminish" ];

function DictionaryAPI() {
  var requestUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

  fetch(requestUrl)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response.status);
        return;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data[0].meanings.length; i++) {
        var grammerArray = data[0].meanings[i].definitions;
        console.log("DEFINITION");
        grammerArray.forEach((grammer) => {
          console.log(grammer.definition);
        });
      }

      var phoneticsArray = data[0].phonetics[0];
      console.log("PHONETICS");
      console.log(phoneticsArray.text);
      console.log("PHONETICSAUDIO");
      console.log(phoneticsArray.audio.slice(2));

      var word = data[0].word;
      console.log("WORD");
      console.log(word);
    });
}

function GiphyAPI() {
  var requestUrl =
    "http://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&api_key=" +
    GiphyAPIKey +
    "&limit=5";

  fetch(requestUrl)
    .then(function (response) {
      if (response.status === 404) {
        console.log(response.status);
        return;
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data.data);
      for (var i = 0; i < data.data.length; i++) {
        console.log(data.data[i].embed_url);
      }
    });
}

//   searchForm.addEventListener("submit", DictionaryAPI);
//   searchForm.addEventListener("submit", GiphyAPI);
DictionaryAPI();
GiphyAPI();

var words = ["Annihilate", "Complacent", "Conceive", "Confine", "Demonstrate", "Deplete", "Desolate", "Erratic", "Excel", "Exhilarating", "Frankly", "Geriatric", "Hostile", "Lucrative", "Ornate", "Petulant", "Reluctantly", "Scrutinize", "Solidarity", "Unveil", "Contemplate", "Dreary", "Dubious", "Bittersweet", "Diminish" ]

//collapsable initiation 
$(document).ready(function(){
  $('.collapsible').collapsible();
});