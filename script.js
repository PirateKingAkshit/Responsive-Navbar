

document.addEventListener("DOMContentLoaded", function () {
  const menuItem = document.querySelectorAll(".menu li");

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove "active" class from all menu items
      menuItem.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle "active" class for the clicked menu item
      item.classList.add("active");
    });
  });
});

const hamburgerIcon = document.querySelector(".hamburger_icon");
const menu = document.querySelector(".menu");

hamburgerIcon.addEventListener("click", function () {
  menu.classList.toggle("hide");
});



