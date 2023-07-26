// Fetch userData from localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Sample questions array (replace this with your actual questions)
const questions = [
  {

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

    question: "What is the correct HTML element for the largest heading?",
    options: [
      "A. h1",
      "B. heading",
      "C. h6",
      "D. head"
  ],
    answer: "A. h1",
   
},
{
  
    question: "Which attribute is used to define inline styles in HTML?",
    options: [
      "A. style",
      "B. css",
      "C. inline",
      "D. design"
  ],
    answer: "A. style",
    
},
{
  
    question: "What is the correct HTML element for inserting an image?", 
    options: [
        "A. img",
        "B. picture",
        "C. image",
        "D.  src"
    ],
    answer: "A. img",
   
},
{
  
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      "A. ol",
      "B. list",
      "C. ul",
      "D. unordered"
  ],
    answer: "C. ul",
   
},
{
  
    question: "In HTML, which attribute is used to specify the URL of the linked resource?",
    options: [
      "A. href",
      "B. link",
      "C. src",
      "D. url"
  ],
    answer: "A. href",
   
},
{
  
    question: "What is the purpose of the HTML <head> element?",
    options: [
      "A.  It defines the header for a web page.",
      "B.  It defines a section of navigation links.",
      "C.  It contains meta-information about the document.",
      "D.  It displays the main content of the page."
  ],
    answer: "C.  It contains meta-information about the document.",
    
},
{
  
    question: "Which HTML tag is used to define a table row?",
    options: [
      "A.  td",
      "B.  tr",
      "C.  th",
      "D.  table-row"
  ],
    answer: "B.  tr",
  
},
{
  
    question: "How do you create a line break in HTML?",
    options: [
      "A.  lb",
      "B.  break",
      "C.  br",
      "D.  linebreak"
  ],
    answer: "C.  br",
  
},
{
    
    question: "Which HTML attribute is used to specify an alternate text for an image?",
    options: [
        "A.  alt",
        "B.  caption",
        "C.  description",
        "D.  alt-text"
    ],
    answer: "A.  alt"
    
},
  // Add more questions here...
];

// Function to populate the quiz table with questions and options
function populateQuizTable() {
  const quizTableBody = document.querySelector('#quiz-table tbody');
  quizTableBody.innerHTML = '';

  questions.forEach((questionObj, index) => {
    const row = document.createElement('tr');

    const questionCell = document.createElement('td');
    questionCell.textContent = `Q${index + 1}: ${questionObj.question}`;
    row.appendChild(questionCell);

    const optionsCell = document.createElement('td');
    optionsCell.textContent = questionObj.options.join(', ');
    row.appendChild(optionsCell);

    quizTableBody.appendChild(row);
  });
}

// Function to populate the results table with user's answers and correctness
function populateResultsTable() {
  const resultsTableBody = document.querySelector('#results-table tbody');
  resultsTableBody.innerHTML = '';

  userData.answers.forEach((userAnswer, index) => {
    const questionObj = questions[index];
    const row = document.createElement('tr');

    const questionCell = document.createElement('td');
    questionCell.textContent = `Q${index + 1}: ${questionObj.question}`;
    row.appendChild(questionCell);

    const userAnswerCell = document.createElement('td');
    userAnswerCell.textContent = userAnswer;
    row.appendChild(userAnswerCell);

    const correctAnswerCell = document.createElement('td');
    correctAnswerCell.textContent = questionObj.answer;
    row.appendChild(correctAnswerCell);

    const resultCell = document.createElement('td');
    if (userAnswer === questionObj.answer) {
      resultCell.textContent = 'Correct';
    } else {
      resultCell.textContent = 'Incorrect';
    }
    row.appendChild(resultCell);

    resultsTableBody.appendChild(row);
  });
}

// Add an event listener to the "Show Answers" button
document.getElementById('show-answers-btn').addEventListener('click', showUserAnswers);

// Function to show the user's answers
function showUserAnswers() {
  populateResultsTable();
}

// Call the functions to populate the quiz and results tables initially
populateQuizTable();
populateResultsTable();
