const countdown = 10;
const starArray = ['https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-yellow.png', 'https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-blue.png',  'https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-purple.png'];
//making a reference variable that is holding the div id score 
const scoreId = document.querySelector("#score");
let score = 0;
//defining a function add score 
function addScore() {
  score++;
  scoreId.innerText = score;
}
//refering the image that has id stars
const stars = document.querySelector("#stars");
//adding a event listener click and calling a function addScore 
stars.addEventListener("click", addScore);


function moveStars(){
  stars.style.top = Math.random()*500+'px';
  stars.style.left = Math.random()*1300+'px'

  var randomNum = Math.floor(Math.random()*starArray.length);
  var newStar = starArray[randomNum];

  stars.src = newStar;

}

setInterval(moveStars,1000);


function gameOver() {
	document.querySelector("#gameOver").style.display = 'block';
	stars.style.display = 'none';
}

setTimeout(gameOver,20000);
