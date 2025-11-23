// Quiz questions array
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale"
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: "1945"
    },
    {
        question: "The chemical symbol for gold is Au.",
        options: ["True", "False"],
        answer: "True"
    }
];

// DOM elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const questionCountElement = document.getElementById('question-count');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');

// Quiz variables
let currentQuestionIndex = 0;
let score = 0;

// Start quiz function
function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
}

// Display current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionCountElement.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add new options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
    
    // Hide next button and feedback
    nextBtn.classList.add('hidden');
    feedbackElement.classList.add('hidden');
}

// Handle answer selection
function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Check if answer is correct
    const isCorrect = selectedOption === currentQuestion.answer;
    
    // Update score if correct
    if (isCorrect) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    
    // Show feedback
    feedbackElement.textContent = isCorrect ? "Correct! 🎉" : `Wrong! The correct answer is ${currentQuestion.answer}`;
    feedbackElement.classList.remove('hidden');
    feedbackElement.classList.add(isCorrect ? 'correct' : 'wrong');
    
    // Highlight correct answer
    optionButtons.forEach(button => {
        if (button.textContent === currentQuestion.answer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption && !isCorrect) {
            button.classList.add('wrong');
        }
    });
    
    // Show next button
    nextBtn.classList.remove('hidden');
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Show final result
function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    finalScoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    
    // Set result message based on score
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
        resultMessageElement.textContent = "Excellent! You're a quiz wizard! 🧙‍♂️";
    } else if (percentage >= 50) {
        resultMessageElement.textContent = "Good job! You know your stuff! 👍";
    } else {
        resultMessageElement.textContent = "Keep practicing! You'll get better! 💪";
    }
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);