function analyzeMail() {
  const sender = document.getElementById("sender").value;
  const receiver = document.getElementById("receiver").value;
  const type = document.getElementById("type").value;
  const weight = parseFloat(document.getElementById("weight").value);

  const result = document.getElementById("result");
  const progress = document.getElementById("progressBox");

  // Validation
  if (!sender || !receiver || !weight || weight <= 0) {
    result.innerHTML = "⚠️ Iltimos, barcha maydonlarni to‘ldiring.";
    return;
  }

  progress.classList.remove("d-none");
  result.innerHTML = "";

  // Fake AI calculations
  const baseDays = type === "Tezkor pochta" ? 1 : type === "Xalqaro pochta" ? 5 : 3;
  const deliveryDays = baseDays + Math.floor(weight / 5);

  const riskLevels = ["Past", "O‘rtacha", "Yuqori"];
  const risk = weight > 10 ? "Yuqori" : riskLevels[Math.floor(Math.random() * 2)];

  const efficiency = 90 + Math.floor(Math.random() * 10);

  const recommendations = [
    "Avtomatik saralash",
    "Qo‘shimcha tekshiruv",
    "Tezkor marshrutlash",
    "Qo‘lda nazorat"
  ];
  const recommendation = recommendations[Math.floor(Math.random() * recommendations.length)];

  setTimeout(() => {
    progress.classList.add("d-none");

    result.innerHTML = `
      <b>✅ AI tahlili yakunlandi</b><br><br>
      📍 Jo‘natuvchi: <b>${sender}</b><br>
      📦 Qabul qiluvchi: <b>${receiver}</b><br>
      🚚 Taxminiy yetkazish vaqti: <b>${deliveryDays} kun</b><br>
      🤖 AI xavf darajasi: <b>${risk}</b><br>
      📌 Tavsiya: <b>${recommendation}</b><br>
      ⚡ Samaradorlik: <b>${efficiency}%</b>
    `;
  }, 1800);
}
