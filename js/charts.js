// Counter animation
function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);

  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) clearInterval(timer);
  }, stepTime);
}

animateValue("total-mails", 0, 1200, 1500);
animateValue("ai-processed", 0, 1100, 1500);
animateValue("delivered", 0, 1050, 1500);
animateValue("errors", 0, 150, 1500);

// Line Chart
new Chart(document.getElementById("mailChart"), {
  type: "line",
  data: {
    labels: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun"],
    datasets: [{
      label: "Jo‘natmalar",
      data: [120, 190, 300, 250, 220, 340],
      borderWidth: 3,
      tension: 0.4
    }]
  }
});

// Doughnut Chart
new Chart(document.getElementById("aiChart"), {
  type: "doughnut",
  data: {
    labels: ["Kechikish", "Noto‘g‘ri manzil", "Buzilish"],
    datasets: [{
      data: [45, 35, 20],
      borderWidth: 1
    }]
  }
});
