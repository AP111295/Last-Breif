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

  arrow_left.addEventListener("click", function () {
    const currIdx = current_index;

    if (currIdx > 0) {
      cards[currIdx - 1].scrollIntoView({ behavior: "smooth" });
    }
  });

  arrow_right.addEventListener("click", function () {
    const currIdx = current_index;

    if (currIdx < slider_indicators.length - 1) {
      cards[currIdx + 1].scrollIntoView({ behavior: "smooth" });
      return currIdx === 0;
    }
  });
});
