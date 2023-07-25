const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const showResultAns = document.querySelector('.showResultAns-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const R = document.querySelector('.R');
const userData = JSON.parse(localStorage.getItem('userData'));
userData.position="JAVASCRIPT";
let questionCount = 0;
let questionLooper=0 ;
let questionNumb = 1;
let userScore = 0;
let countQt = 1;
let userAnswerR=[];




// the welcoming message
let homeWelcome = document.querySelector("#homeUserName")
let datasaved = JSON.parse(localStorage.getItem("userData"));
homeWelcome.innerText
homeWelcome.append(datasaved.FirstName);

// this is the start test button 
startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

// this is the exit test button 
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active')
}

// this is the button that leads u to the test
continueBtn.onclick = () => {
   quizSection.classList.add('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizBox.classList.add('active');

   showQuestions(questionCount);
   questionCounter(1);
   headerScore();
}

// the try again button after u finish u could try the test one more time
showResultAns.onclick = () => {
let i=0
    const Re=document.querySelector(".R-list");
    // const R=document.querySelector(".R");
    let Rtag= `<div class="R"><pre><span>${userAnswerR[i++]}<!-- A. First Option --></span></pre></div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>
    <div class="R">${userAnswerR[i++]}</div>`;

  
    Re.innerHTML = Rtag;
    // Re.classList.add("active")

}

// go to home page this butten leads u to the main page

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
    location.reload();
}



//the counter tat is gonna count the time for the test
function startCountDown (){
    let quizeTimer =setInterval(function(){
        if (quizeTime <= 0) {
            clearInterval(quizeTimer);
            showResultBox();
        } else {
            quizeTime--;
            let sec=Math.floor(quizeTime %60);
            let min=Math.floor(quizeTime/60)%60;
            counting.innerHTML=` ${min}:${sec}`;
        }
    }, 1000)
}
let time = 0.5;
let quizeTimeInMin = time * 60 * 60;
let quizeTime = quizeTimeInMin / 60;
let counting = document.getElementById('cuonter-down');
startCountDown();




function checkPosition(){
    if (JSON.stringify(userData.position).toUpperCase() === `"HTML"`){
          questionLooper=9;
          questionCount = 0;
      }
    else if (JSON.stringify(userData.position).toUpperCase() === `"CSS"`){       
          questionLooper=19;
          questionCount = 10;
      }
      else if (JSON.stringify(userData.position).toUpperCase() === `"JAVASCRIPT"`){     
          questionLooper=29;
          questionCount = 20;
         
      }
      else if (JSON.stringify(userData.position).toUpperCase() === `"ENGLISH"`){
         questionLooper=39;
         questionCount = 30;
      }
        

}

// this button is gonna allow u to go to the next question if u did not chose any answer it's gonna be disabled at the end it's gonna call the show result
const nextBtn = document.querySelector('.next-btn');

checkPosition();
nextBtn.onclick = () => {
    if (questionCount < questionLooper) {
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

// getting questions and options from array
const optionList = document.querySelector('.option-list');

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

// this function checking the user answer and changeing the marks
function optionSelected (answer) {
    userAnswerR.push(answer.textContent);
    console.log(userAnswerR);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;


    // if the user answer correctly raise his score
    if (userAnswer == correctAnswer) {
        nextBtn.classList.add('active');
        for (let i = 0; i < allOptions; i++){
            optionList.children[i].classList.add('disabled');
        }
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
       answer.classList.add ('incorrect')
       nextBtn.classList.add('active');

      //88  if answer incorrest, auto selected correct answer
        for (let i = 0; i < allOptions; i++){
            optionList.children[i].classList.add('disabled');
        }
    }

    //if user selected, disabled all' options
    for (let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

// this is the statment saying no. out of 10 it's gonna be down at the left side
function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of 10 Questions`;
}

// this the user score it's gonna be up at the right side
function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / 10`;
}

// once the user finish this function is gonna calculate the user result and the percentage
function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of 10`;

    // this is the percentage calculation
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / 10) * 100;
    let speed = 20;

    // the cicule of percentage
    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
    
}

// once the quiz start it's gonna count down
function startCountdown (){
    let quizeTimer =setInterval(function(){
        if (quizeTime <= 0) {
        clearInterval(quizeTimer);
        showResultBox();
        } else {
            quizeTime--;
            let sec=Math.floor(quizeTime %60);
            let min=Math.floor(quizeTime/60)%60;
            counting.innerHTML=` ${min}:${sec}`;
            }
    },1000)
}
startCountdown();



//test