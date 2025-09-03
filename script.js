const quizData = [
  {
    question: "1. A coin is tossed once. What is the probability of getting a head?",
    options: ["1/2", "1/3", "1/4", "1"],
    answer: "1/2"
  },
  {
    question: "2. A die is rolled. Probability of getting an even number?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    answer: "1/2"
  },
  {
    question: "3. A bag has 3 red and 5 blue balls. One ball is drawn. Probability it is red?",
    options: ["3/8", "5/8", "1/2", "2/5"],
    answer: "3/8"
  },
  {
    question: "4. Two coins are tossed. Probability of getting two heads?",
    options: ["1/4", "1/2", "3/4", "2/3"],
    answer: "1/4"
  },
  {
    question: "5. A card is drawn from a standard deck. Probability of getting a king?",
    options: ["1/52", "1/13", "4/52", "1/26"],
    answer: "1/13"
  },
  {
    question: "6. A die is rolled twice. Probability of getting a 6 both times?",
    options: ["1/6", "1/36", "1/12", "1/18"],
    answer: "1/36"
  },
  {
    question: "7. Probability of getting a prime number on a die?",
    options: ["1/2", "1/3", "2/3", "1/6"],
    answer: "1/2"
  },
  {
    question: "8. A bag has 6 white and 4 black balls. One ball drawn. Probability it is black?",
    options: ["2/5", "3/5", "1/2", "4/10"],
    answer: "2/5"
  },
  {
    question: "9. Probability of drawing an ace from a deck?",
    options: ["1/52", "4/52", "1/13", "1/26"],
    answer: "1/13"
  },
  {
    question: "10. If two dice are rolled, probability of getting sum = 7?",
    options: ["1/6", "1/12", "1/18", "1/36"],
    answer: "1/6"
  },
  {
    question: "11. A coin is tossed 3 times. Probability of getting exactly 2 heads?",
    options: ["1/8", "3/8", "1/4", "1/2"],
    answer: "3/8"
  },
  {
    question: "12. A bag has 4 red, 3 blue balls. Probability of drawing a blue ball?",
    options: ["3/7", "4/7", "1/2", "2/7"],
    answer: "3/7"
  },
  {
    question: "13. A card is drawn. Probability of getting a spade?",
    options: ["1/4", "1/13", "4/52", "1/52"],
    answer: "1/4"
  },
  {
    question: "14. Probability of rolling an odd number on a die?",
    options: ["1/2", "1/3", "2/3", "5/6"],
    answer: "1/2"
  },
  {
    question: "15. A coin is tossed 4 times. Probability of all heads?",
    options: ["1/4", "1/8", "1/16", "1/32"],
    answer: "1/16"
  },
  {
    question: "16. A card is drawn. Probability of not getting a face card?",
    options: ["40/52", "12/52", "1/4", "3/13"],
    answer: "40/52"
  },
  {
    question: "17. A die is rolled. Probability of number ≤ 3?",
    options: ["1/2", "1/3", "2/3", "1/6"],
    answer: "1/2"
  },
  {
    question: "18. Two coins tossed. Probability of at least one head?",
    options: ["1/4", "1/2", "3/4", "1"],
    answer: "3/4"
  },
  {
    question: "19. A bag has 2 red, 2 blue, 2 green balls. One drawn. Probability it is green?",
    options: ["1/3", "1/2", "1/6", "2/3"],
    answer: "1/3"
  },
  {
    question: "20. Probability of drawing a red card from a standard deck?",
    options: ["1/2", "1/4", "1/3", "13/52"],
    answer: "1/2"
  }
];

const quizContainer = document.getElementById("quiz");

function loadQuiz() {
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
      <p><b>${q.question}</b></p>
      ${q.options.map(opt =>
        `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
      ).join("")}
    `;

    quizContainer.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("result").innerText =
    `✅ You scored ${score} out of ${quizData.length}`;
}

loadQuiz();
