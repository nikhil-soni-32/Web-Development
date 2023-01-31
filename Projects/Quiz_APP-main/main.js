const quizData = [{
        question: "What does HTML stands for?",
        a: "Hypertext Machine language.",
        b: "Hypertext and links markup language.",
        c: "Hypertext Markup Language",
        d: "Hightext machine language",
        correct: "c",
    },
    {
        question: "How is document type initialized in HTML5.?",
        a: "</DOCTYPE HTML>",
        b: "</DOCTYPE>",
        c: "<!DOCTYPE HTML>",
        d: "</DOCTYPE html>",
        correct: "c",
    },
    {
        question: "Which of the following HTML Elements is used for making any text bold ?",
        a: "<p>",
        b: "<i>",
        c: "<li>",
        d: "<b>",
        correct: "d",
    },
    {
        question: "Which of the following HTML element is used for creating an unordered list?",
        a: "<ui>",
        b: "<i>",
        c: "<em>",
        d: "<ul>",
        correct: "d",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> You've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);