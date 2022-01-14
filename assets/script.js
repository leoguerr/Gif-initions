var startBtnMain = document.querySelector("#startbtn");

// will link to result page once its created
var resultsPage = "./Main.html";

startBtnMain.addEventListener("click", function () {
  document.location.replace(resultsPage);
});

// Side nav initiation
$(document).ready(function(){
  $('.sidenav').sidenav();
});