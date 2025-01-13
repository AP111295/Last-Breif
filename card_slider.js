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
      console.log(current_index);
      slider_indicators.forEach((indicator) => {
        indicator.classList.remove("indicator_active");
      });
      slider_indicators[current_index].classList.add("indicator_active");
    }
  });
});
