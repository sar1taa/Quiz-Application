const questions = [
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "Boolean", "Float", "String"],
        correct: 2
    },
    {
        question: "What is the smallest unit of data in a computer",
        options: ["Bit", "Byte", "Kilobyte", "Megabyte"],
        correct: 0
    },
    {
        question: "Which number system is used by computers to process data?",
        options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
        correct: 2
    },
    {
        question: "What is the primary function of an operating system?",
        options: ["Perform arithmetic operations", "Manage computer hardware and software resources", "Connect to the internet", "Compile programming code"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a type of computer network?",
        options: ["LAN (Local Area Network)", "WAN(Wide Area Network)", "MAN(Metropolitan Area Network)", "FAN(Fast Area Network)"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("final-score");
const quizContent = document.getElementById("quiz-content");
const result = document.getElementById("result");

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    nextBtn.disabled = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (nextBtn.disabled) {
        const correct = questions[currentQuestion].correct;
        const options = document.querySelectorAll('.option');

        options[correct].classList.add('correct');
        if (selected !== correct) {
            options[selected].classList.add('wrong');
        } else {
            score++;
            scoreEl.textContent = score;
        }

        nextBtn.disabled = false;
    }
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizContent.style.display = 'none';
        result.style.display = 'block';
        finalScoreEl.textContent = score;
    }
};

document.getElementById("restart").onclick = () => {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = '0';
    quizContent.style.display = 'block';
    result.style.display = 'none';
    showQuestion();
};

showQuestion();
