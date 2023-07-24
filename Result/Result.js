  // JavaScript code to dynamically populate questions on the new page

        // Array of questions
        let questions = [
            {
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
        ];

        // Function to populate questions dynamically
        function populateQuestions() {
            const questionList = document.querySelector('.question-list');

            questions.forEach((question) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question-item');

                const questionText = document.createElement('h2');
                questionText.textContent = `${question.numb}. ${question.question}`;

                const optionsList = document.createElement('ul');
                question.options.forEach((option) => {
                    const optionItem = document.createElement('li');
                    optionItem.textContent = option;
                    optionsList.appendChild(optionItem);
                });

                questionDiv.appendChild(questionText);
                questionDiv.appendChild(optionsList);
                questionList.appendChild(questionDiv);
            });
        }

        // Call the function to populate questions when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            populateQuestions();
        });
    