const data = [
    {
        id:1,
        question : "which of these fish is actually a fish",
        answers : [
            {answer: "swordfish", isCorrect: true},
            {answer: "jellyfish", isCorrect: false},
            {answer: "starfish", isCorrect: false},
            {answer: "crayfish", isCorrect: false},
        ],
    },
    {
        id:2,
        question : "A flutter is a group of : ",
        answers : [
            {answer: "bees", isCorrect: false},
            {answer: "penguins", isCorrect: false},
            {answer: "butterflies", isCorrect: true},
            {answer: "camels", isCorrect: false},
        ],
    },
    {
        id:3,
        question : "what is the capital of Ghana",
        answers : [
            {answer: "cape town", isCorrect: false},
            {answer: "lome", isCorrect: false},
            {answer: "accra", isCorrect: true},
            {answer: "cairo", isCorrect: false},
        ],
    },
    {
        id:4 ,
        question : "how many countries are they in Africa",
        answers : [
            {answer: "112", isCorrect: false},
            {answer: "68", isCorrect: false},
            {answer: "12", isCorrect: false},
            {answer: "54", isCorrect: true},
        ],
    },
]
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = ()=>{
 qIndex = 0;
 correctCount = 0;
 wrongCount = 0;
 total = 0;
showQuestion(qIndex);
};
play.addEventListener("click", ()=>{
    resultScreen.style.display = "none"
    gameScreen.style.display = "block"
    playAgain();
})

const showResult = ()=>{
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"

    resultScreen.querySelector(".correct").textContent = `Correct Answers : ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers : ${wrongCount}`;
    resultScreen.querySelector(".score").textContent = `Score : ${correctCount - wrongCount * 10}`;
}
const showQuestion = (qNumber)=>{
    if(qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML =data[qNumber].answers.map((item,index)=>
        `
        <div class="answer">
        <input name="answer" type="radio" id="${index}" value="${item.isCorrect}">
        <label for="${index}">${item.answer}</label>
    </div>
    `
    ).join("");
    selectAnswer()
};
const selectAnswer = ()=>{
 answerContainer.querySelectorAll('input').forEach(el=>{
    el.addEventListener('click',(e)=>{
        selectedAnswer = e.target.value;
    });
 }) ;
};

 const submitAnswer = ()=>{
    submit.addEventListener('click', ()=>{
        if(selectedAnswer !== null){
            selectedAnswer === 'true' ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex);
        }
       else{
       alert("select an answer ");
        }
});
 }

submitAnswer();
showQuestion(qIndex);