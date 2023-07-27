// Fetch userData from localStorage
let userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);
userData = userData.filter((e) => e.email === localStorage.emailInUse);
userData = userData[0];
let userposition = userData.position

// Sample questions array (replace this with your actual questions)
var questions = [];

if (userposition === "HTML") {
  /////////////////////////////////////HTML Question//////////////////////////////////////
  questions = [
    {
      numb: 1,
      question: "Which HTML tag is used to create a hyperlink?",
      answer: "B. a",
      options: ["A. link", "B. a", "C. hyperlink", "D. url"],
    },
    {
      numb: 2,
      question: "What is the correct HTML element for the largest heading?",
      answer: "A. h1",
      options: ["A. h1", "B. heading", "C. h6", "D. head"],
    },
    {
      numb: 3,
      question: "Which attribute is used to define inline styles in HTML?",
      answer: "A. style",
      options: ["A. style", "B. css", "C. inline", "D. design"],
    },
    {
      numb: 4,
      question: "What is the correct HTML element for inserting an image?",
      answer: "A. img",
      options: ["A. img", "B. picture", "C. image", "D.  src"],
    },
    {
      numb: 5,
      question: "Which HTML tag is used to define an unordered list?",
      answer: "C. ul",
      options: ["A. ol", "B. list", "C. ul", "D. unordered"],
    },
    {
      numb: 6,
      question:
        "In HTML, which attribute is used to specify the URL of the linked resource?",
      answer: "A. href",
      options: ["A. href", "B. link", "C. src", "D. url"],
    },
    {
      numb: 7,
      question: "What is the purpose of the HTML <head> element?",
      answer: "C.  It contains meta-information about the document.",
      options: [
        "A.  It defines the header for a web page.",
        "B.  It defines a section of navigation links.",
        "C.  It contains meta-information about the document.",
        "D.  It displays the main content of the page.",
      ],
    },
    {
      numb: 8,
      question: "Which HTML tag is used to define a table row?",
      answer: "B.  tr",
      options: ["A.  td", "B.  tr", "C.  th", "D.  table-row"],
    },
    {
      numb: 9,
      question: "How do you create a line break in HTML?",
      answer: "C.  br",
      options: ["A.  lb", "B.  break", "C.  br", "D.  linebreak"],
    },
    {
      numb: 10,
      question:
        "Which HTML attribute is used to specify an alternate text for an image?",
      answer: "A.  alt",
      options: ["A.  alt", "B.  caption", "C.  description", "D.  alt-text"],
    },
  ];
} else if (userposition == "CSS") {
  /////////////////////////////////////CSS Question//////////////////////////////////////
  questions = [
    {
      numb: 11,
      question:
        "Which CSS property is used to control the spacing between lines of text?",
      answer: "A.  <link rel='stylesheet' href='style.css'",
      options: [
        "A.  line-height",
        "B.  letter-spacing",
        "C.  text-spacing",
        "D.  word-spacing",
      ],
    },
    {
      numb: 12,
      question:
        "Which CSS property is used to change the text color of an element?",
      answer: "B.  color",
      options: [
        "A.  text-style",
        "B.  color",
        "C.  font-color",
        "D.  text-color",
      ],
    },
    {
      numb: 13,
      question: "How do you select an element with the ID 'header' in CSS?",
      answer: "A.  #header",
      options: [
        "A.  #header",
        "B.  .header",
        "C.  element.header",
        "D.  header",
      ],
    },
    {
      numb: 14,
      question: "What does CSS stand for?",
      answer: "A.  Cascading Style Sheets",
      options: [
        "A.  Cascading Style Sheets",
        "B.  Computer Style Sheets",
        "C.  Colorful Style Sheets",
        "D.  Creative Style Sheets",
      ],
    },
    {
      numb: 15,
      question:
        "What is the correct way to apply a CSS style to an element with the ID 'navbar'",
      answer: "A.  #navbar { color: blue; }",
      options: [
        "A.  #navbar { color: blue; }",
        "B.  .navbar { color: blue; }",
        "C.  navbar { color: blue; }",
        "D.  navbar.{ color: blue; }",
      ],
    },
    {
      numb: 16,
      question:
        "What CSS property is used to control the spacing between lines of text?",
      answer: "A.  line-height",
      options: [
        "A.  line-height",
        "B.  text-spacing",
        "C.  line-spacing",
        "D.  spacing",
      ],
    },
    {
      numb: 17,
      question: "How do you apply a border to an element in CSS?",
      answer: "B.  border: 1px solid black;",
      options: [
        "A.  border-style",
        "B.  border: 1px solid black;",
        "C.  element-border: 1px solid black;",
        "D.  border-width: 1px;",
      ],
    },
    {
      numb: 18,
      question:
        "Which CSS property is used to create rounded corners for an element?",
      answer: "A.  border-radius",
      options: [
        "A.  border-radius",
        "B.  corner-radius",
        "C.  rounded-corners",
        "D.  corner-style",
      ],
    },
    {
      numb: 19,
      question: "What is the default value for the position property in CSS?",
      answer: "A.  static",
      options: ["A.  static", "B.  relative", "C.  absolute", "D.  fixed"],
    },
    {
      numb: 20,
      question: "How do you change the font size of an element in CSS?",
      answer: "A.  font-size",
      options: ["A.  font-size", "B.  text-size", "C.  size", "D.  font-style"],
    },
  ];
} else if (userposition == "JavaScript") {
  /////////////////////////////////////JS Question//////////////////////////////////////
  questions = [
    {
      numb: 21,
      question: "Which keyword is used to declare a variable in JavaScript?",
      answer: "A.  var",
      options: ["A.  var", "B.  let", "C.  const", "D.  int"],
    },
    {
      numb: 22,
      question: "How do you create a function in JavaScript?",
      answer: "C.  function myFunction()",
      options: [
        "A.  function = myFunction()",
        "B.  function:myFunction()",
        "C.  function myFunction()",
        "D.  myFunction = function()",
      ],
    },
    {
      numb: 23,
      question:
        "What is the correct way to check if the variable 'x' is NOT equal to 5 in JavaScript?",
      answer: "D.  if (x !== 5)",
      options: [
        "A.  if x <> 5",
        "B.  if (x != 5)",
        "C.  if (x =! 5)",
        "D.  if (x !== 5)",
      ],
    },
    {
      numb: 24,
      question:
        "Which built-in method is used to convert a string to all lowercase letters in JavaScript?",
      answer: "A.  toLowerCase()",
      options: [
        "A.  toLowerCase()",
        "B.  lowerCase()",
        "C.  changeCase('lower')",
        "D.  stringToLower()",
      ],
    },
    {
      numb: 25,
      question:
        "Which function is used to parse a JSON string into a JavaScript object?",
      answer: "B.  JSON.parse()",
      options: [
        "A.  JSON.stringify()",
        "B.  JSON.parse()",
        "C.  JSON.serialize()",
        "D.  JSON.decode()",
      ],
    },
    {
      numb: 26,
      question: "What does the 'DOM' stand for in JavaScript?",
      answer: "A.  Document Object Model",
      options: [
        "A.  Document Object Model",
        "B.  Data Output Mechanism",
        "C.  Downloaded Object Manager",
        "D.  Document Order Model",
      ],
    },
    {
      numb: 27,
      question:
        "What is the correct way to call a function named 'myFunction' in JavaScript?",
      answer: "A.  myFunction()",
      options: [
        "A.  myFunction()",
        "B.  call myFunction()",
        "C.  invoke myFunction()",
        "D.  function.myFunction()",
      ],
    },
    {
      numb: 28,
      question:
        "Which method is used to add new elements to the end of an array in JavaScript?",
      answer: "A.  push()",
      options: ["A.  push()", "B.  addToEnd()", "C.  append()", "D.  insert()"],
    },
    {
      numb: 29,
      question: "What does the 'typeof' operator in JavaScript return?",
      answer: "A.  The data type of a variable",
      options: [
        "A.  The data type of a variable",
        "B.  The value of a variable",
        "C.  The size of a variable",
        "D.  The index of a variable",
      ],
    },
    {
      numb: 30,
      question:
        "How do you create a loop that runs as long as a condition is true in JavaScript?",
      answer: "B.  while loop",
      options: [
        "A.  for loop",
        "B.  while loop",
        "C.  loop-while",
        "D.  do-while loop",
      ],
    },
  ];
}

// Function to populate the quiz table with questions and options
function populateQuizTable() {
  userAnswers = userData.answers;
  const quizTableBody = document.querySelector("#Tbody");
  quizTableBody.innerHTML = "";

  questions.slice(0,10)
  questions.forEach((ele, index) => {
    const row = document.createElement("tr");

    const questionCell = document.createElement("td");
    questionCell.textContent = `Q${index + 1}: ${ele.question}`;
    row.appendChild(questionCell);

    quizTableBody.appendChild(row);
  });
}

// Function to populate the results table with user's answers and correctness
function populateResultsTable() {
  const resultsTableBody = document.querySelector("#results-table tbody");
  resultsTableBody.innerHTML = "";

  userData.answers.forEach((userAnswer, index) => {
    const questionObj = questions[index];
    const row = document.createElement("tr");

    const questionCell = document.createElement("td");
    questionCell.textContent = `Q${index + 1}: ${questionObj.question}`;
    row.appendChild(questionCell);

    const userAnswerCell = document.createElement("td");
    userAnswerCell.textContent = userAnswer;
    row.appendChild(userAnswerCell);

    const correctAnswerCell = document.createElement("td");
    correctAnswerCell.textContent = questionObj.answer;
    row.appendChild(correctAnswerCell);

    const resultCell = document.createElement("td");
    if (userAnswer === questionObj.answer) {
      resultCell.textContent = "Correct";
    } else {
      resultCell.textContent = "Incorrect";
    }
    row.appendChild(resultCell);

    resultsTableBody.appendChild(row);
  });
}

// Add an event listener to the "Show Answers" button
document
  .getElementById("show-answers-btn")
  .addEventListener("click", showUserAnswers);

// Function to show the user's answers
function showUserAnswers() {
  populateResultsTable();
}

// Call the functions to populate the quiz and results tables initially
populateQuizTable();
populateResultsTable();
