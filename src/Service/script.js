const navig = document.querySelector(".navigation");
// const container = document.querySelector(".grid-2-cols");
const menubar = document.createElement("img");
menubar.src = "icons8-menu-rounded-50.png";
menubar.alt = "menubar";
const nav = navig.querySelector("nav");
navig.append(menubar);
const close = document.createElement("div");
close.innerHTML = "<button >&times;</button>";
close.classList.add("close-modal");
//for trying to correct error

const removeShow = function () {
  close.classList.remove("hidden");
  nav.classList.remove("links");
  nav.classList.add("hidden");
  nav.classList.add("show");
  nav.append(close);
  close.addEventListener("click", function () {
    nav.classList.remove("show");
    close.classList.add("hidden");
  });
};
const responsive = function () {
  console.log(innerWidth);
  if (window.innerWidth <= "700") {
    nav.classList.remove("links");
    nav.classList.add("hidden");
    menubar.style.display = "inline-block";
    menubar.classList.add("menu-bar");

    // menubar.classList.add("menu-bar");
    menubar.addEventListener("click", removeShow);

    // this.removeEventListener("resize", responsive);
  } else {
    close.classList.add("hidden");
    nav.classList.add("links");
    nav.classList.remove("show");
    menubar.style.display = "none";
  }
};
responsive();
visualViewport.addEventListener("resize", responsive);
