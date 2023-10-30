var questions = [
    {
        question: "Какой язык программирования вы изучаете?'",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"

    },
    {
        question: "Что такое HTML?'",
        options: ["Гипертекстовый язык разметки", "Язык программирования", "База данных", "Графический редактор"],
        correctAnswer: "JavaScript"

    },
    {
        question: "Что такое CSS?'",
        options: ["Каскадные таблицы стилей", "Язык программирования", "СУБД", "Фреймворк"],
        correctAnswer: "JavaScript"

    },
]
//Текущий вопрос
var currentQuestion = 0;
//Количество правильных ответов
var correctAnswers = 0;

//Функция перемешивания 
function shufflerArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i + 1);
        [array[i], array[j]] = [array[j], array[i]];

    }
    return array;
}
//Функция перехода к следующему вопросу
function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// Функция отображения текущего варианта вопроса и вариантов ответов
function displayQuestion() {
    var questionElement = document.getElementById("question");

    questionElement.textContent = "Вопрос" + (currentQuestion + 1) + ":" +
        questions[currentQuestion].question;

    var optionsElement = document.getElementById('options');
    optionsElement.innerHTML = "";

    var shuffledOptions = shufflerArray(questions[currentQuestion].options);

    for (var i = 0; i < shuffledOptions.length; i++) {
        var option = shuffledOptions[i];
        optionsElement.innerHTML = optionsElement.innerHTML + `<button onclick="nextQuestion('${option} ')">${option} </button>`
    }

}

// Функция продолжения результата 
function displayResult() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');
    var resultElement = document.getElementById('result');

    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    resultElement.textContent = 'Правильных ответов:' + correctAnswers + "из" + questions.length;
    resultElement.style.display = 'block';
}

// Начало теста

displayQuestion();
