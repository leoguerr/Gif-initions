var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var questionContainerElement2 = document.getElementById("question-container2")
var questionContainerElement3 = document.getElementById("question-container3")
var questionContainerElement4 = document.getElementById("question-container4")

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

var hintButtonElement = document.getElementById("hintButton")
var giphyHintElement = document.getElementById("giphyHint")

hintButtonElement.addEventListener('click', showHint)

function showHint() {
    giphyHintElement.classList.remove('hide')

}

var hintButtonElement2 = document.getElementById("hintButton2")
var giphyHintElement2 = document.getElementById("giphyHint2")

hintButtonElement2.addEventListener('click', showHint2)

var correctAnswerButton = document.getElementById("correct-answer")
var NextButton = document.getElementById("next-btn")

correctAnswerButton.addEventListener('click', showNextButton)

function showNextButton () {
    NextButton.classList.remove('hide')
}

NextButton.addEventListener('click', hideQuestions)

function hideQuestions () {
    questionContainerElement.classList.add('hide')
    NextButton.classList.add('hide')
    questionContainerElement2.classList.remove('hide')
}

function showHint2() {
    giphyHintElement2.classList.remove('hide')

}

var correctAnswerButton2 = document.getElementById("correct-answer2")
var NextButton2 = document.getElementById("next-btn2")

correctAnswerButton2.addEventListener('click', showNextButton2)

function showNextButton2 () {
    NextButton2.classList.remove('hide')
}

NextButton2.addEventListener('click', hideQuestions2)

function hideQuestions2 () {
    questionContainerElement2.classList.add('hide')
    NextButton2.classList.add('hide')
    questionContainerElement3.classList.remove('hide')
}

var hintButtonElement3 = document.getElementById("hintButton3")
var giphyHintElement3 = document.getElementById("giphyHint3")

hintButtonElement3.addEventListener('click', showHint3)

function showHint3() {
    giphyHintElement3.classList.remove('hide')

}

var correctAnswerButton3 = document.getElementById("correct-answer3")
var NextButton3 = document.getElementById("next-btn3")

correctAnswerButton3.addEventListener('click', showNextButton3)

function showNextButton3 () {
    NextButton3.classList.remove('hide')
}


NextButton3.addEventListener('click', hideQuestions3)

function hideQuestions3 () {
    questionContainerElement3.classList.add('hide')
    NextButton3.classList.add('hide')
    questionContainerElement4.classList.remove('hide')
}

var hintButtonElement4 = document.getElementById("hintButton4")
var giphyHintElement4 = document.getElementById("giphyHint4")

hintButtonElement4.addEventListener('click', showHint4)

function showHint4() {
    giphyHintElement4.classList.remove('hide')

}

var correctAnswerButton4 = document.getElementById("correct-answer4")
var NextButton4 = document.getElementById("next-btn4")

correctAnswerButton4.addEventListener('click', showNextButton4)

function showNextButton4 () {
    NextButton4.classList.remove('hide')


}
NextButton4.addEventListener('click', hideQuestions4)

function hideQuestions4 () {
    questionContainerElement4.classList.add('hide')
    NextButton4.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

// Side nav initiation
$(document).ready(function(){
    $('.sidenav').sidenav();
  });