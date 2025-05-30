let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper(".services__list", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy();
    swiperInstance = null;
  }
}

function updateToggleButtonDisplay() {
  const toggleBtn = document.querySelector(".services__toggle");
  if (!toggleBtn) return;

  if (window.innerWidth < 768) {
    toggleBtn.style.display = "none";
  } else {
    toggleBtn.style.display = "flex";
  }
}

function setupToggleButton() {
  const toggleBtn = document.querySelector(".services__toggle");
  const itemsList = document.querySelector(".services__items");
  const toggleText = toggleBtn?.querySelector(".services__toggle-text");
  const iconExpand = toggleBtn?.querySelector(".services__icon--expand");
  const iconCollapse = toggleBtn?.querySelector(".services__icon--collapse");

  if (!toggleBtn || !itemsList || !toggleText) return;

  toggleBtn.addEventListener("click", () => {
    const expanded = itemsList.classList.toggle("services__items--expanded");
    toggleText.textContent = expanded ? "Скрыть" : "Показать все";
    toggleBtn.classList.toggle("services__toggle--expanded", expanded);

    if (iconExpand && iconCollapse) {
      iconExpand.style.display = expanded ? "none" : "inline";
      iconCollapse.style.display = expanded ? "inline" : "none";
    }
  });
}

function handleResize() {
  initSwiper();
  updateToggleButtonDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  initSwiper();
  updateToggleButtonDisplay();
  setupToggleButton();
});

window.addEventListener("resize", handleResize);
