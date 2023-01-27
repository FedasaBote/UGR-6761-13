const video = document.querySelectorAll(".video");

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
