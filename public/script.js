// Define quiz questions and answers
const quizData = [
    {
        question: "Full form of RAM is ?",
        options: ['Random Access Memory',
            'Randon Actual Memory',
            'right Access Memory',
            'None of ABove'],
        answer: "Random Access Memory"
    },
    {
        question: "Full form of CPU is ?",
        options: [ 'Random Access Memory',
        'Central Processing Unit',
        'right Access Memory',
        'None of ABove'],
        answer: "Central Processing Unit"
    },
    {
        question: "Full form of E-MAIL is ?",
        options: ['Electronic mail',
        'Central Processing Unit',
        'right Access Memory',
        'None of ABove'],
        answer: "Electronic mail"
    },
    {
        question: " Full form of LCD",
        answer: "Liquid Crystal Display",
        options: [
            'Liquid Crystal Display',
            'Central Processing Unit',
            'Light Crystal Display',
            'None of ABove'
        ]

    },
    {
        question: " Full form of SEO is ?",
        answer: "None Of The Above",
        options: [
            'Safe Engin Optimizing',
            'Central Processing Unit',
            'Light Crystal Display',
            'None Of The Above'
        ]

    }
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Get elements from the DOM
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var scoreElement = document.getElementById("score");
var submitButton = document.getElementById("submit");

// Load question and options
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "option";
        radioInput.value = option;

        const label = document.createElement("label");
        label.innerText = option;

        const optionWrapper = document.createElement("div");
        optionWrapper.appendChild(radioInput);
        optionWrapper.appendChild(label);

        optionsElement.appendChild(optionWrapper);
    });
}

// Check if the selected answer is correct
function checkAnswer() {
    const selectedOption = document.querySelector("input[type='radio']:checked");

    if (!selectedOption) {
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion === quizData.length) {
        // Display the final score
        questionElement.innerText = `Quiz complete! Your score is ${score}/${quizData.length}.`;
        optionsElement.style.display = "none";
        submitButton.style.display = "none";
    } else {
        loadQuestion();
    }

    scoreElement.innerText = `Score: ${score}`;
}

// Load the first question
loadQuestion();

// Attach event listener to the submit button
submitButton.addEventListener("click", checkAnswer);