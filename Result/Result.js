const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      correctAnswer: "Mars"
    },
    // Add more questions here
    // {
    //   question: "Your question goes here?",
    //   options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    //   correctAnswer: "Correct Option"
    // }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-btn");
  
  function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";
  
    currentQ.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const currentQ = questions[currentQuestion];
    const selectedOption = currentQ.options[selectedIndex];
  
    if (selectedOption === currentQ.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
    optionsElement.innerHTML = "";
    submitButton.style.display = "none";
  }
  
  submitButton.addEventListener("click", showQuestion);
  
  // Start the quiz when the page loads
  showQuestion();
  