const questions = [
    {
        question: "Who is the only team to defeat the Celtics at Boston (Madison Square) Garden during the 1985-1986 season?",
        answers: [
            {text: "Portland Trail Blazers", correct: true},
            {text: "New York Knicks", correct: false},
            {text: "Miami Heat", correct: false},
            {text: "Oklahoma City Thunder", correct: false},
        ]
    },
    {
        question: "The National Basketball Association was originally called what?",
        answers: [
            {text: "The Basketball Association", correct: false},
            {text: "National Basketball Association of America", correct: true},
            {text: "Associate with Basketball", correct: false},
            {text: "National Basketball", correct: false},
        ]
    },
    {
        question: "Which NBA team has made the most appearances in the finals?",
        answers: [
            {text: "Houston Rockets", correct: false},
            {text: "Golden State Warriors", correct: false},
            {text: "Los Angeles Lakers", correct: true},
            {text: "Boston Celtics", correct: false},
        ]
    },
    {
        question: "The first team outside the US to win an NBA title or reach the finals is...",
        answers: [
            {text: "Toronto Raptors", correct: true},
            {text: "Utah Jazz", correct: false},
            {text: "Los Angeles Lakers", correct: false},
            {text: "Seattle Sonics", correct: false},
        ]
    },
    {
        question: "Which NBA player holds the record for the most points scored in a single game?",
        answers: [
            {text: "Kobe Bryant", correct: false},
            {text: "Michael Jordan", correct: false},
            {text: "Wilt Chamberlain", correct: true},
            {text: "LeBron James", correct: false},
        ]
    },
    {
        question: "Who is known as 'The Greek Freak' in the NBA?",
        answers: [
            {text: "Giannis Antetokounmpo", correct: true},
            {text: "Luka Dončić", correct: false},
            {text: "Kevin Durant", correct: false},
            {text: "Stephen Curry", correct: false},
        ]
    },
    {
        question: "Which NBA team drafted Dirk Nowitzki in 1998?",
        answers: [
            {text: "Dallas Mavericks", correct: true},
            {text: "Los Angeles Lakers", correct: false},
            {text: "Miami Heat", correct: false},
            {text: "San Antonio Spurs", correct: false},
        ]
    },
    {
        question: "Which NBA player has won the most MVP awards?",
        answers: [
            {text: "LeBron James", correct: false},
            {text: "Michael Jordan", correct: false},
            {text: "Kareem Abdul-Jabbar", correct: true},
            {text: "Magic Johnson", correct: false},
        ]
    },
    {
        question: "In what year did the Golden State Warriors break the record for the most regular-season wins?",
        answers: [
            {text: "2015", correct: false},
            {text: "2016", correct: true},
            {text: "2017", correct: false},
            {text: "2018", correct: false},
        ]
    },
    {
        question: "Which player is known for his nickname 'Splash Brother' along with Stephen Curry?",
        answers: [
            {text: "Kevin Durant", correct: false},
            {text: "Klay Thompson", correct: true},
            {text: "James Harden", correct: false},
            {text: "Kyrie Irving", correct: false},
        ]
    },
    {
        question: "Which team did Michael Jordan play for when he made his famous 'Flu Game' in the NBA Finals?",
        answers: [
            {text: "Chicago Bulls", correct: true},
            {text: "Los Angeles Lakers", correct: false},
            {text: "Detroit Pistons", correct: false},
            {text: "Boston Celtics", correct: false},
        ]
    },
    {
        question: "Who holds the record for the most triple-doubles in NBA history?",
        answers: [
            {text: "Magic Johnson", correct: false},
            {text: "LeBron James", correct: false},
            {text: "Oscar Robertson", correct: true},
            {text: "Russell Westbrook", correct: false},
        ]
    },
    {
        question: "Which NBA team is known as the 'Lob City' due to their exciting alley-oop plays?",
        answers: [
            {text: "Los Angeles Lakers", correct: false},
            {text: "Houston Rockets", correct: false},
            {text: "Golden State Warriors", correct: false},
            {text: "Los Angeles Clippers", correct: true},
        ]
    },
    {
        question: "Who is the all-time leading scorer for the Boston Celtics?",
        answers: [
            {text: "Paul Pierce", correct: false},
            {text: "John Havlicek", correct: true},
            {text: "Larry Bird", correct: false},
            {text: "Bill Russell", correct: false},
        ]
    }];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const popupContainer = document.getElementById("popup-container");
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    
    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
    
            if (answer.correct) {
                button.dataset.correct = index;
            }
    
            button.addEventListener("click", () => selectAnswer(index));
        });
    }
    
    function showImage(imageSrc, durationInSeconds) {
        const image = document.createElement("img");
        image.src = imageSrc;
        image.classList.add("popup-image");
        popupContainer.appendChild(image);
    
        setTimeout(() => {
            popupContainer.removeChild(image);
        }, durationInSeconds * 1000);
    }
    
    function selectAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedAnswer = currentQuestion.answers[selectedIndex];
    
        if (selectedAnswer.correct) {
            score++;
            showImage("vin.gif", 3);
        }
    
        nextQuestion();
    }
    

function showPopupImage() {
    const popupContainer = document.getElementById("popup-container");

    // Create an image element
    const image = document.createElement("img");
    image.src = "vin.gif";
    image.classList.add("popup-image");

    // Create a text element for the correct message
    const correctMessage = document.createElement("p");
    correctMessage.textContent = "Correct!";
    correctMessage.classList.add("popup-message");

    // Append both the image and the text to the popup container
    popupContainer.appendChild(image);
    popupContainer.appendChild(correctMessage);

    setTimeout(() => {
        // Remove both the image and the text after 3 seconds
        popupContainer.removeChild(image);
        popupContainer.removeChild(correctMessage);
    }, 3000); // Adjust the duration (in milliseconds) as needed
}

    
    function nextQuestion() {
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }
    
    function endQuiz() {
        alert("Quiz ended. Your score: " + score);
    }
    
    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play again";
        nextButton.style.display = "block";
    }
    
    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });
    
    startQuiz();