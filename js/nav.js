const navList = document.querySelector("#navList");
const menuBar = document.querySelector("#menuBar");
const megaMenu = document.querySelector("#megaMenu")
const toursList = document.querySelector("#navList li:nth-child(3)");

menuBar.addEventListener("click", () => {
  const visibilty = navList.getAttribute("data-visible");
  if (visibilty === "false") {
    navList.setAttribute("data-visible", true);
    menuBar.classList.add("cancel-menu");
  } else {
    navList.setAttribute("data-visible", false);
    menuBar.classList.remove("cancel-menu")
    megaMenu.setAttribute("aria-hidden", false);
  }
});

toursList.addEventListener("click", () => {
  const visibilty = megaMenu.getAttribute("aria-hidden");
  if (visibilty === "false") {
    megaMenu.setAttribute("aria-hidden", true);
  } else {
    megaMenu.setAttribute("aria-hidden", false);
  }
});
