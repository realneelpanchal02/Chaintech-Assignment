document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const cards = document.querySelectorAll(".portfolio-card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const cntBtn = document.querySelector(".cnt-btn");
  if (cntBtn) {
    cntBtn.addEventListener("click", function () {
      alert("Thanks for your interest! Please contact us.");
    });
  }
});
