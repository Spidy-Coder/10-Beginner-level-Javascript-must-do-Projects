const quizData = [
    {
        question:"How old is Paridhi?",
        a:"10",
        b:"17",
        c:"19",
        d:"18",
        correct:"c"
    },
    {
        question:"What is the most used programming language in 2019?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d"
    },
    {
        question:"Who is the president of India?",
        a:"Narendra Modi",
        b:"Amit Shah",
        c:"Pranab Mukherjee",
        d:"Ram Nath Kovind",
        correct:"d"
    },
    {
        question:"What does HTML stands for?",
        a:"Hypertext Markup language",
        b:"Cascading style sheet",
        c:"Jason object notation",
        d:"Helicopter terminals motorboats lamborginins",
        correct:"a"
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score=0;

loadQuiz();

function loadQuiz(){

    deselectedAnswers();

    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;    
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectedAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});