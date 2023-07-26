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
const nextBtn = document.querySelector('.next-btn');

// the welcoming message
let homeWelcome = document.querySelector("#homeUserName")
let datasaved = JSON.parse(localStorage.getItem("userData"));
homeWelcome.innerText
homeWelcome.append(datasaved.FirstName);
console.log(userData.position);
var quizshow=userData.position;

// this is the start test button 
startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
    let home = document.querySelector('#home').style.display = 'none'
}

// this is the exit test button 
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active')
}

// this it the button that leads u to the test
// continueBtn.onclick = () => {
//    quizSection.classList.add('active');
//    popupInfo.classList.remove('active');
//    main.classList.remove('active');
//    quizBox.classList.add('active');

//    showQuestions(questionCount);
//    questionCounter(1);
//    headerScore();
//    startCountDown();
// }

//hiding start btn 
function hide() {
  startBtn.style.display="none"
  }

// the try again button after u finish u could try the test one more time
// tryAgainBtn.onclick = () => {
//     quizBox.classList.add('active');
//     nextBtn.classList.remove('active');
//     resultBox.classList.remove('active');

//     questionCount = 0;
//     questionNumb = 1;
//     userScore = 0;
//     showQuestions(questionCount);
//     questionCounter(questionNumb);

//     headerScore();
// }

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
    hide();
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let countQt = 1;

if (!userData.answers){
    userData.answers = []
}

//the counter tat is gonna count the time for the test
// function startCountDown (){
//     let quizeTimer =setInterval(function(){
//         if (quizeTime <= 0) {
//             clearInterval(quizeTimer);
//             showResultBox();
//         } else {
//             quizeTime--;
//             let sec=Math.floor(quizeTime %60);
//             let min=Math.floor(quizeTime/60)%60;
//             counting.innerHTML=` ${min}:${sec}`;
//         }
//     }, 1000)
// }
// startCountDown();
// let time = 5;
// let quizeTimeInMin = time * 60 * 60;
// let quizeTime = quizeTimeInMin / 60;
// let counting = document.getElementById('cuonter-down');




var questions = [];
  if (quizshow === 'HTML'){/////////////////////////////////////HTML Question//////////////////////////////////////
    questions = [ {
        numb: 1,
        question: "Which HTML tag is used to create a hyperlink?",
        answer: "B. a",
        options: [
            "A. link",
            "B. a",
            "C. hyperlink",
            "D. url"
        ]
    },
    {
        numb: 2,
        question: "What is the correct HTML element for the largest heading?",
        answer: "A. h1",
        options: [
            "A. h1",
            "B. heading",
            "C. h6",
            "D. head"
        ]
    },
    {
        numb: 3,
        question: "Which attribute is used to define inline styles in HTML?",
        answer: "A. style",
        options: [
            "A. style",
            "B. css",
            "C. inline",
            "D. design"
        ]
    },
    {
        numb: 4,
        question: "What is the correct HTML element for inserting an image?",
        answer: "A. img",
        options: [
            "A. img",
            "B. picture",
            "C. image",
            "D.  src"
        ]
    },
    {
        numb: 5,
        question: "Which HTML tag is used to define an unordered list?",
        answer: "C. ul",
        options: [
            "A. ol",
            "B. list",
            "C. ul",
            "D. unordered"
        ]
    },
    {
        numb: 6,
        question: "In HTML, which attribute is used to specify the URL of the linked resource?",
        answer: "A. href",
        options: [
            "A. href",
            "B. link",
            "C. src",
            "D. url"
        ]
    },
    {
        numb: 7,
        question: "What is the purpose of the HTML <head> element?",
        answer: "C.  It contains meta-information about the document.",
        options: [
            "A.  It defines the header for a web page.",
            "B.  It defines a section of navigation links.",
            "C.  It contains meta-information about the document.",
            "D.  It displays the main content of the page."
        ]
    },
    {
        numb: 8,
        question: "Which HTML tag is used to define a table row?",
        answer: "B.  tr",
        options: [
            "A.  td",
            "B.  tr",
            "C.  th",
            "D.  table-row"
        ]
    },
    {
        numb: 9,
        question: "How do you create a line break in HTML?",
        answer: "C.  br",
        options: [
            "A.  lb",
            "B.  break",
            "C.  br",
            "D.  linebreak"
        ]
    },
    {
        numb: 10,
        question: "Which HTML attribute is used to specify an alternate text for an image?",
        answer: "A.  alt",
        options: [
            "A.  alt",
            "B.  caption",
            "C.  description",
            "D.  alt-text"
        ]
    }]
}
  else if(quizshow == 'CSS') {  /////////////////////////////////////CSS Question//////////////////////////////////////
    questions =   [{
        numb: 11,
        question: "Which CSS property is used to control the spacing between lines of text?",
        answer: "A.  <link rel='stylesheet' href='style.css'",
        options: [
            "A.  line-height",
            "B.  letter-spacing",
            "C.  text-spacing",
            "D.  word-spacing"
        ]
    },
    {
        numb: 12,
        question: "Which CSS property is used to change the text color of an element?",
        answer: "B.  color",
        options: [
            "A.  text-style",
            "B.  color",
            "C.  font-color",
            "D.  text-color"
        ]
    },
    {
        numb: 13,
        question: "How do you select an element with the ID 'header' in CSS?",
        answer: "A.  #header",
        options: [
            "A.  #header",
            "B.  .header",
            "C.  element.header",
            "D.  header"
        ]
    },
    {
        numb: 14,
        question: "What does CSS stand for?",
        answer: "A.  Cascading Style Sheets",
        options: [
            "A.  Cascading Style Sheets",
            "B.  Computer Style Sheets",
            "C.  Colorful Style Sheets",
            "D.  Creative Style Sheets"
        ]
    },
    {
        numb: 15,
        question: "What is the correct way to apply a CSS style to an element with the ID 'navbar'",
        answer: "A.  #navbar { color: blue; }",
        options: [
            "A.  #navbar { color: blue; }",
            "B.  .navbar { color: blue; }",
            "C.  navbar { color: blue; }",
            "D.  navbar.{ color: blue; }"
        ]
    },
    {
        numb: 16,
        question: "What CSS property is used to control the spacing between lines of text?",
        answer: "A.  line-height",
        options: [
            "A.  line-height",
            "B.  text-spacing",
            "C.  line-spacing",
            "D.  spacing"
        ]
    },
    {
        numb: 17,
        question: "How do you apply a border to an element in CSS?",
        answer: "B.  border: 1px solid black;",
        options: [
            "A.  border-style",
            "B.  border: 1px solid black;",
            "C.  element-border: 1px solid black;",
            "D.  border-width: 1px;"
        ]
    },
    {
        numb: 18,
        question: "Which CSS property is used to create rounded corners for an element?",
        answer: "A.  border-radius",
        options: [
            "A.  border-radius",
            "B.  corner-radius",
            "C.  rounded-corners",
            "D.  corner-style"
        ]
    },
    {
        numb: 19,
        question: "What is the default value for the position property in CSS?",
        answer: "A.  static",
        options: [
            "A.  static",
            "B.  relative",
            "C.  absolute",
            "D.  fixed"
        ]
    },
    {
        numb: 20,
        question: "How do you change the font size of an element in CSS?",
        answer: "A.  font-size",
        options: [
            "A.  font-size",
            "B.  text-size",
            "C.  size",
            "D.  font-style"
        ]
    }]
  }
  else if (quizshow == 'JavaScript') { /////////////////////////////////////JS Question//////////////////////////////////////
   questions =[ {
        numb: 21,
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "A.  var",
        options: [
            "A.  var",
            "B.  let",
            "C.  const",
            "D.  int"
        ]
    },
    {
        numb: 22,
        question: "How do you create a function in JavaScript?",
        answer: "C.  function myFunction()",
        options: [
            "A.  function = myFunction()",
            "B.  function:myFunction()",
            "C.  function myFunction()",
            "D.  myFunction = function()"
        ]
    },
    {
        numb: 23,
        question: "What is the correct way to check if the variable 'x' is NOT equal to 5 in JavaScript?",
        answer: "D.  if (x !== 5)",
        options: [
            "A.  if x <> 5",
            "B.  if (x != 5)",
            "C.  if (x =! 5)",
            "D.  if (x !== 5)"
        ]
    },
    {
        numb: 24,
        question: "Which built-in method is used to convert a string to all lowercase letters in JavaScript?",
        answer: "A.  toLowerCase()",
        options: [
            "A.  toLowerCase()",
            "B.  lowerCase()",
            "C.  changeCase('lower')",
            "D.  stringToLower()"
        ]
    },
    {
        numb: 25,
        question: "Which function is used to parse a JSON string into a JavaScript object?",
        answer: "B.  JSON.parse()",
        options: [
            "A.  JSON.stringify()",
            "B.  JSON.parse()",
            "C.  JSON.serialize()",
            "D.  JSON.decode()"
        ]
    },
    {
        numb: 26,
        question: "What does the 'DOM' stand for in JavaScript?",
        answer: "A.  Document Object Model",
        options: [
            "A.  Document Object Model",
            "B.  Data Output Mechanism",
            "C.  Downloaded Object Manager",
            "D.  Document Order Model"
        ]
    },
    {
        numb: 27,
        question: "What is the correct way to call a function named 'myFunction' in JavaScript?",
        answer: "A.  myFunction()",
        options: [
            "A.  myFunction()",
            "B.  call myFunction()",
            "C.  invoke myFunction()",
            "D.  function.myFunction()"
        ]
    },
    {
        numb: 28,
        question: "Which method is used to add new elements to the end of an array in JavaScript?",
        answer: "A.  push()",
        options: [
            "A.  push()",
            "B.  addToEnd()",
            "C.  append()",
            "D.  insert()"
        ]
    },
    {
        numb: 29,
        question: "What does the 'typeof' operator in JavaScript return?",
        answer: "A.  The data type of a variable",
        options: [
            "A.  The data type of a variable",
            "B.  The value of a variable",
            "C.  The size of a variable",
            "D.  The index of a variable"
        ]
    },
    {
        numb: 30,
        question: "How do you create a loop that runs as long as a condition is true in JavaScript?",
        answer: "B.  while loop",
        options: [
            "A.  for loop",
            "B.  while loop",
            "C.  loop-while",
            "D.  do-while loop"
        ]
    }]
  }


// this it the button that leads u to the test
continueBtn.onclick = () => {
   quizSection.classList.add('active');
   popupInfo.classList.remove('active');
   main.classList.remove('active');
   quizBox.classList.add('active');

   showQuestions(questionCount);
   questionCounter(1);
    startCountdown();
   headerScore();

}

let  time = 3.50;
let quizeTimeInMin = time *60 * 60;
 let  quizeTime =quizeTimeInMin /60;

let counting = document.getElementById('cuonter-down');

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

  // this button is gonna allow u to go to the next question if u did not chose any answer it's gonna be disabled at the end it's gonna call the show result
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
      // Reset the "answered" variable for the next question
      answered = false;
      questionCount++;
      showQuestions(questionCount);
  
      questionNumb++;
      questionCounter(questionNumb);
  
      nextBtn.classList.remove('active');
    } else {
      showResultBox();
    }
};

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
        option[i].addEventListener('click', function () {
            optionSelected(this);
          });
    }   
}

function optionSelected (answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    for (let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }
     nextBtn.classList.add('active');


    // if the user answer correctly raise his score
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
        //    for (let i = 0; i < allOptions; i++){
        //     optionList.children[i].classList.add('disabled');
        // }
    }
    else {
        answer.classList.add ('incorrect')
       // optionList.children[i].classList.add('disabled');
        // if answer incorrest, auto selected correct answer
        // for (let i = 0; i < allOptions; i++){
        //     optionList.children[i].classList.add('disabled');
        // }
        // nextBtn.classList.add('active');
        // for (let i = 0; i < allOptions; i++){
        //     optionList.children[i].classList.add('disabled');
        // }
    }
 

    // //if user selected, disabled all' options
    // for (let i = 0; i < allOptions; i++){
    //     optionList.children[i].classList.add('disabled');
    // }

    // nextBtn.classList.add('active');
}



// // Add a variable to keep track of whether the user has already answered the current question
// let answered = false;
// function optionSelected(answer) {
//     // Check if the question has already been answered
//     if (answered) {
//       return;
//     }
  
//     let userAnswer = answer.textContent;
//     let correctAnswer = questions[questionCount].answer;
  
//     // If the user answers correctly
//     if (userAnswer == correctAnswer) {
//       answer.classList.add('correct');
//       userScore += 1;
//       nextBtn.classList.add('active');
//       headerScore();
//     } else {
//       answer.classList.add('incorrect');
//     }
//     // Mark the question as answered
//     answered = true;
//     // Save the user's answer in the userData
//     userData.answers[questionCount] = userAnswer;
//     localStorage.setItem('userData', JSON.stringify(userData));
//     // Disable further selections after the user answers
//     const option = document.querySelectorAll('.option');
//     for (let i = 0; i < option.length; i++) {
//       option[i].removeEventListener('click', function () {
//         optionSelected(this);
//       });
//     }
//   // if answer incorrest, auto selected correct answer
//         //  for (let i = 0; i < allOptions; i++){
//         //     optionList.children[i].classList.add('disabled');
//         // }
//         nextBtn.classList.add('active');
//     // Enable the next button after the user answers
//   }
  
 
  
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

// const StringMinutes = 1;
// let time = StringMinutes*60;
// const countdownEl = document.getElementById('cutdown');

// if (JSON.stringify(userData.position).toUpperCase() === `"HTML"`){
//     questionCount = 0;
// }
// else if (JSON.stringify(userData.position).toUpperCase() === `"CSS"`){       
//     questionCount = 10;
// }
// else if (JSON.stringify(userData.position).toUpperCase() === `"JAVASCRIPT"`){     
//     questionCount = 20;
    
// }
// else if (JSON.stringify(userData.position).toUpperCase() === `"ENGLISH"`){
//     questionCount = 30;
// }

//     let questionLooper ;
//   if (JSON.stringify(userData.position).toUpperCase() === `"HTML"`){
//         console.log(true);
//         questionLooper=9;
//     }
//   else if (JSON.stringify(userData.position).toUpperCase() === `"CSS"`){       
//         questionLooper=19;
//     }
//     else if (JSON.stringify(userData.position).toUpperCase() === `"JAVASCRIPT"`){     
//         questionLooper=29;
        
//     }
//     else if (JSON.stringify(userData.position).toUpperCase() === `"ENGLISH"`){
//        questionLooper=39;
//     }
tryAgainBtn.addEventListener('click' , function(){
    window.open("./Result/Result.html" , "_blank")
});