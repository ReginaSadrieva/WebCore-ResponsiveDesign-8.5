// document.addEventListener("DOMContentLoaded", () => {
//   const isMobile = window.innerWidth < 768;
//   const toggleBtn = document.querySelector(".services__toggle");
//   const itemsList = document.querySelector(".services__items");
//   const toggleText = toggleBtn?.querySelector(".services__toggle-text");
//   const iconExpand = toggleBtn?.querySelector(".services__icon--expand");
//   const iconCollapse = toggleBtn?.querySelector(".services__icon--collapse");

//   if (isMobile) {
//     // Swiper on mobiles
//     new Swiper(".services__list", {
//       slidesPerView: "auto",
//       spaceBetween: 16,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });

//     // Expand/collapse button hide on mobile
//     if (toggleBtn) {
//       toggleBtn.style.display = "none";
//     }
//   } else {
//     // Expand/collapse button only on tablets and desktops
//     if (toggleBtn) {
//       toggleBtn.addEventListener("click", () => {
//         const expanded = itemsList.classList.toggle(
//           "services__items--expanded"
//         );
//         toggleText.textContent = expanded ? "Скрыть" : "Показать все";
//         toggleBtn.classList.toggle("services__toggle--expanded", expanded);
//        // iconExpand.style.display = expanded ? "none" : "inline";
//        // iconCollapse.style.display = expanded ? "inline" : "none";
//       });
//     }
//   }
// });
// let swiperInstance = null;

// function initSwiper() {
//   if (window.innerWidth < 768 && !swiperInstance) {
//     swiperInstance = new Swiper(".services__list", {
//       slidesPerView: "auto",
//       spaceBetween: 16,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
//     document.querySelector(".services__toggle").style.display = "none";
//   } else if (window.innerWidth >= 768 && swiperInstance) {
//     swiperInstance.destroy();
//     swiperInstance = null;
//     document.querySelector(".services__toggle").style.display = "flex";
//   }
// }

// window.addEventListener("resize", initSwiper);
// document.addEventListener("DOMContentLoaded", initSwiper);
let swiperInstance = null;

function initSwiper() {
  const toggleBtn = document.querySelector(".services__toggle");

  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper(".services__list", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
        bulletActiveClass: "swiper-pagination-bullet-active",
      },
      on: {
        slideChange: function () {
          swiperInstance.pagination.update(); // Обновляем пагинацию при свайпе
        },
      },
    });

    if (toggleBtn) {
      toggleBtn.style.display = "none";
    }
  } else if (window.innerWidth >= 768) {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    if (toggleBtn) {
      toggleBtn.style.display = "flex";

      const itemsList = document.querySelector(".services__items");
      const toggleText = toggleBtn.querySelector(".services__toggle-text");

      toggleBtn.addEventListener("click", () => {
        const expanded = itemsList.classList.toggle("services__items--expanded");
        toggleText.textContent = expanded ? "Скрыть" : "Показать все";
        toggleBtn.classList.toggle("services__toggle--expanded", expanded);
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", initSwiper);
