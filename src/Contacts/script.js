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
  if (document.documentElement.clientWidth <= "700") {
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

const nameInput = document.querySelector("#name");
const name = document.querySelector(".name");
const phoneInput = document.querySelector("#phone");
const phone = document.querySelector(".phone");
const questionInput = document.querySelector("#question");
const question = document.querySelector(".question");
const sendbtn = document.querySelector(".send");

sendbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameInput.value.length <= 3) {
    const spaname = name.querySelector("span");
    spaname.classList.remove("hidden");
    return;
  }
  if (String(phoneInput.value).length !== 10) {
    const spaname = phone.querySelector("span");
    spaname.classList.remove("hidden");
    return;
  }
  if (questionInput.value.length < 5) {
    const spaname = question.querySelector("span");
    spaname.classList.remove("hidden");
    return;
  }
  const spaname = question.querySelector("span");
  spaname.textContent = "your question is received";
  spaname.classList.remove("hidden");
});
