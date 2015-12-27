var curPage = 0;

var myQuiz = [
  ["What is addEventListener() used for?", "attach a click event", "nothing", "never use it", "listens to HTML", 1], 
  ["What does DOM stand for?", "Document Object Mode", "Document Over Mountains", "Do Over Models", "Nothing", 1]
];

document.getElementById("btnNext").addEventListener("click", moveNext);
document.getElementById("btnPrevious").addEventListener("click", moveBack);

var myQuestions = document.getElementById("questions");
var myHeader = document.getElementById("quizHeader");
var className = document.getElementsByClassName("answer");

checkPage();

console.log(className);

for(var i = 0; i < className.length; i++) {
  className[i].addEventListener('click', myAnswer, false);
}

function myAnswer() {
  var idAnswer = this.getAttribute("data-id");
  document.getElementById("page1").innerHTML = 'Answer ' + idAnswer;
}