const video = document.querySelectorAll(".video");
const navig = document.querySelector(".navigation");
// const container = document.querySelector(".grid-2-cols");
const menubar = document.createElement("img");
menubar.src = "../images/icons8-menu-rounded-50.png";
menubar.alt = "menubar";
const nav = navig.querySelector("nav");
navig.append(menubar);
const close = document.createElement("div");
close.innerHTML = "<button >&times;</button>";
close.classList.add("close-modal");
//for trying to correct error
let errorhandle = [];

const removeShow = function () {
  errorhandle.forEach((err) => err.classList.add("takeToback"));
  close.classList.remove("hidden");
  nav.classList.remove("links");
  nav.classList.add("hidden");
  nav.classList.add("show");
  nav.append(close);
  close.addEventListener("click", function () {
    errorhandle.forEach((err) => err.classList.remove("takeToback"));
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
    errorhandle.forEach((err) => err.classList.remove("takeToback"));
    nav.classList.add("links");
    nav.classList.remove("show");
    menubar.style.display = "none";

    menubar.removeEventListener("click", removeShow);
  }
};
responsive();
visualViewport.addEventListener("resize", responsive);

video.forEach((vid) => {
  const vidplayer = document.createElement("img");
  vidplayer.classList.add("vidPlayer");
  vidplayer.alt = "player-video";
  vidplayer.src = "../images/icons8-play-button-circled-48.png";
  vid.prepend(vidplayer);
  errorhandle.push(vid);
});

const overlay = document.querySelector(".overlay");

let clicked;
video.forEach((vid) =>
  vid.addEventListener("click", function (e) {
    e.preventDefault();
    const child = vid.querySelector(".vid");
    const vidPlayer = vid.querySelector(".vidPlayer");
    vidPlayer.classList.add("hidden");
    vid.classList.add("clicked");
    overlay.classList.remove("hidden");
    clicked = vid;
    child.setAttribute("controls", true);
    child.play();
    window.scrollTo({ left: "12.5%", top: 100, behavior: "smooth" });
  })
);

overlay.addEventListener("click", function (e) {
  e.preventDefault();
  const child = clicked.querySelector(".vid");
  const vidPlayer = clicked.querySelector(".vidPlayer");
  vidPlayer.classList.remove("hidden");
  clicked.classList.remove("clicked");
  overlay.classList.add("hidden");
  child.removeAttribute("controls", true);
  child.pause();
});

//serach
const search = document.querySelector("#search");
const filtered = [];
const arrvid = [];
search.addEventListener("keyup", function (e) {
  e.preventDefault();

  video.forEach((vid) => {
    const vidtext = vid.querySelector("h1").textContent;
    if (vidtext.toLowerCase().startsWith(this.value.toLowerCase()))
      filtered.push(vidtext);
  });

  console.log(filtered);
  video.forEach((vid) => {
    const vidtext = vid.querySelector("h1").textContent;
    if (vidtext !== filtered[0]) {
      console.log(vidtext);
      vid.classList.add("hidden");
    }
  });
  if (this.value === "") {
    video.forEach((vid) => vid.classList.remove("hidden"));
  }
});
