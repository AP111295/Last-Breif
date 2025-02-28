window.addEventListener("load", function () {
  const slider_indicators = document.querySelectorAll(".slider_indicator");

  const card_container = document.querySelector(".card_container");

  card_container.addEventListener("scroll", function () {
    const cards = Array.from(document.querySelectorAll(".card"));

    const current_index = cards.findIndex((card) => {
      const card_position = card.getBoundingClientRect();

      return card_position.left === 0;
    });
    if (current_index != -1) {
      slider_indicators.forEach((indicator) => {
        indicator.classList.remove("indicator_active");
      });

      slider_indicators[current_index].classList.add("indicator_active");
    }
  });

  const arrow_left = document.querySelector(".arrow_card_left");
  const arrow_right = document.querySelector(".arrow_card_right");

  const cards = Array.from(document.querySelectorAll(".card"));

  const current_index = cards.findIndex((card) => {
    const card_position = card.getBoundingClientRect();

    return card_position.left === 0;
  });

  var currIdx = 0;
  // Flèche droite
  arrow_right.addEventListener("click", function () {
    if (currIdx >= cards.length - 1) {
      currIdx = 0;
    } else {
      currIdx = currIdx + 1;
    }
    cards[currIdx].scrollIntoView({ behavior: "smooth" });
  });

  // Flèche gauche
  arrow_left.addEventListener("click", function () {
    if (currIdx <= 0) {
      currIdx = cards.length - 1;
    } else {
      currIdx = currIdx - 1;
    }
    cards[currIdx].scrollIntoView({ behavior: "smooth" });
  });
});
