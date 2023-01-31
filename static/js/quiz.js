const quizData = [{
    question: 'Who was the first President of India and when did he bacame the President?',
    'a':'Mahatma Gandhi, 1947',
    'b':'Rajendra Prasad, 1947',
    'c':'Rajendra Prasad, 1950',
    'd':'Mahatma Gandhi, 1950',
    'correct':'d'
},
{
    question: 'There is a blue wheel at the center of the national flag. What does it represent?',
    'a':'Wheel of revolution',
        'b':'Wheel of law',
        'c':'Wheel of purity and religion',
        'd':'Wheel of progress',
        'correct':'b'
},
{
    question: 'On the occassion of Republic Day, flag hoisting ceremony is held at which place?',
    'a':'Rashtrapati Bhawan',
    'b':'Rajpath',
    'c':'Red Fort',
    'd':'India Gate',
    'correct':'c'
},
{
    question: "Who is called as 'Father of Indian Constitution'",
    'a':'B.R. Ambedkar',
    'b':'Jawaharlal Nehru',
    'c':'Dr Rajender Prasad',
    'd':'M.K. Gandhi',
    'correct':'a'
},
{
    question: "How many states and union territores participate in the Rebplic Day Parade?",
    'a':'21',
    'b':'26',
    'c':'29',
    'd':'32',
    'correct':'c'
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
sessionStorage.setItem("marks",correct);
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <br>
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        <br>
        <a href="coupon">Proceed Ahead</a>
        <br>
        <br>
        

        
        
    </div>
    
`
}
loadQuestion(index);



