const chatToggle = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");
const chatClose = document.getElementById("chat-close");

chatToggle.addEventListener("click", () => {
  chatbot.classList.toggle("d-none");
});

chatClose.addEventListener("click", () => {
  chatbot.classList.add("d-none");
});

const chatBody = document.getElementById("chat-body");
const input = document.getElementById("chat-input");

const aiAnswers = [
  {
    keywords: ["salom", "hello", "assalom"],
    answer: "Salom 👋 Men AI pochta yordamchisiman. Savolingizni bering."
  },
  {
    keywords: ["ai", "suniy", "intellekt"],
    answer: "Sun’iy intellekt pochta jo‘natmalarini saralash, tahlil qilish va kechikishlarni oldindan aniqlashda ishlatiladi."
  },
  {
    keywords: ["kechikish", "delay"],
    answer: "AI tizimi tarixiy ma’lumotlar asosida kechikish ehtimolini oldindan aniqlaydi."
  },
  {
    keywords: ["yetkazish", "yetib"],
    answer: "Jo‘natmalar avtomatik marshrutlash orqali eng tez yo‘l bilan yetkaziladi."
  },
  {
    keywords: ["xavfsizlik", "xavf"],
    answer: "AI shubhali jo‘natmalarni aniqlab, xavfsizlik darajasini oshiradi."
  },
  {
    keywords: ["narx", "cost"],
    answer: "Narx jo‘natma turi, og‘irligi va masofaga qarab AI orqali hisoblanadi."
  }
];

// Default javob
function defaultAnswer() {
  const answers = [
    "Bu savol bo‘yicha AI tahlil olib bormoqda 🤖",
    "Iltimos, savolingizni biroz aniqroq yozing.",
    "AI bu jarayonda katta samaradorlik beradi.",
    "Bu funksiya pochta tizimining bir qismi hisoblanadi."
  ];
  return answers[Math.floor(Math.random() * answers.length)];
}

input.addEventListener("keypress", e => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    const userText = input.value.toLowerCase();

    chatBody.innerHTML += `
      <div><b>Siz:</b> ${input.value}</div>
    `;
    input.value = "";

    setTimeout(() => {
      let response = defaultAnswer();

      aiAnswers.forEach(item => {
        item.keywords.forEach(word => {
          if (userText.includes(word)) {
            response = item.answer;
          }
        });
      });

      chatBody.innerHTML += `
        <div><b>AI:</b> ${response}</div>
      `;

      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }
});
