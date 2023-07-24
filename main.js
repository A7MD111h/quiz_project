const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const userData = JSON.parse(localStorage.getItem('userData'));
let countQt=1;

//userData.position="JAVASCRIPT";
//HTML
//CSS
//JAVASCRIPT
//ENGLISH

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');

}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active')
}

let questionCount ;
if (JSON.stringify(userData.position).toUpperCase() === `"HTML"`){
    questionCount = 0;
}
else if (JSON.stringify(userData.position).toUpperCase() === `"CSS"`){       
    questionCount = 10;
}

else if (JSON.stringify(userData.position).toUpperCase() === `"JAVASCRIPT"`){     
    questionCount = 20;
    
}
else if (JSON.stringify(userData.position).toUpperCase() === `"ENGLISH"`){
    questionCount = 30;
}

continueBtn.onclick = () => {
   quizSection.classList.add('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizBox.classList.add('active');

   showQuestions(questionCount);
   questionCounter(1);
   headerScore();
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = questionCount-9;
    questionNumb = 1;
    userScore = 0;
    countQt=1;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = questionCount;
    questionNumb = 1;
    userScore = 0;
    countQt=1;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}



let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    let questionLooper ;
    
  if (JSON.stringify(userData.position).toUpperCase() === `"HTML"`){
        console.log(true);
        questionLooper=9;
    }
  else if (JSON.stringify(userData.position).toUpperCase() === `"CSS"`){       
        questionLooper=19;
    }
    else if (JSON.stringify(userData.position).toUpperCase() === `"JAVASCRIPT"`){     
        questionLooper=29;
        
    }
    else if (JSON.stringify(userData.position).toUpperCase() === `"ENGLISH"`){
       questionLooper=39;
    }

    console.log(questionLooper);  
    console.log(questionCount);  

    if (questionCount < questionLooper ) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);

       nextBtn.classList.remove('active');
    }
    else {
        showResultBox();
    }
 }

const optionList = document.querySelector('.option-list');

// getting questions and options from array


    function showQuestions(index) {

    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${countQt++}.${questions[index].question}`;

    let optionTag= `<div class="option"><pre><span>${questions[index].options[0]}</span></pre></div>
                    <div class="option"><pre><span>${questions[index].options[1]}</span></pre></div>
                    <div class="option"><pre><span>${questions[index].options[2]}</span></pre></div>
                    <div class="option"><pre><span>${questions[index].options[3]}</span></pre></div>`;

    optionList.innerHTML = optionTag;
        const option = document.querySelectorAll('.option');
     for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
    
}



function optionSelected (answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add ('incorrect')

        // if answer incorrest, auto selected correct answer
        
        for (let i = 0; i < allOptions; i++){
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
        }
    }
}

    //if user selected, disabled all' options
    for (let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of 10 Questions`

}

function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / 10`;
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of 10`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / 10) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

// hi
const StringMinutes = 1;
let time = StringMinutes*60;
const countdownEl = document.getElementById('cutdown');

let x= setInterval(UpdateCountdown, 1000);

function UpdateCountdown(){

    const minutes =Math.floor(time / 60);

let seconds =time % 60;

seconds= seconds < 10 ?'0'+seconds :seconds;   
 
countdownEl.innerHTML= `${minutes} : ${seconds}`;
 
    time--;

   if(time==-1)
   {
    clearInterval(x)
showResultBox()    
   }
}
// <!---5555555555-->
