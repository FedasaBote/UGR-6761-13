// "use strict";
//DATAS
const signedAccounts = [
  {
    username: "fd",
    password: "0960",
  },

  {
    username: "es",
    password: "0951",
  },
];

//Logics
const logicSection = document.querySelector(".login-section");
const signupSection = document.querySelector(".sign-up-section");

//INPUTS
const inputLoginUsername = document.querySelector(".inputLoginUsername");
const inpuLoginPin = document.querySelector(".inpuLoginPin");
const inputSignupUsername = document.querySelector(".inputSignupUsername");
const inputSignupPin = document.querySelector(".inputSignupPin");
const overlay = document.querySelector(".overlay");

const login = document.querySelector(".login");
login.addEventListener("click", function (e) {
  e.preventDefault();

  logicSection.classList.remove("hidden");
  overlay.classList.remove("hidden");
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

//Login-Button
let isLogged = false;
const loginbutton = document.querySelector(".login-button");
loginbutton.addEventListener("click", function (e) {
  e.preventDefault();
  const userlogged = signedAccounts.find(
    (acc) =>
      acc.username === inputLoginUsername.value &&
      acc.password === inpuLoginPin.value
  );
  if (!userlogged)
    return alert(
      "Please enter correct Validation values if you have signed up OR USE username:'fd',password:'0960'"
    );

  isLogged = true;
  // window.open("../Course/index.html", "_self");
  logicSection.classList.add("hidden");
  overlay.classList.add("hidden");
  alert("you can now access courses");
});

const signUp = document.querySelectorAll(".signUp");
signUp.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();
    signupSection.classList.remove("hidden");
    overlay.classList.remove("hidden");
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  })
);

//SignUp-Button
const signupbutton = document.querySelector(".sign-up-button");
signupbutton.addEventListener("click", function () {
  if (inputSignupUsername.value == "" || inputSignupPin.value == "") {
    alert("please. enter username and password");
    return;
  }
  const newAccount = {
    username: inputSignupUsername.value,
    password: inputSignupPin.value,
  };

  signedAccounts.push(newAccount);
});

const close = document.querySelectorAll(".close-modal");
close.forEach((c) =>
  c.addEventListener("click", function (e) {
    logicSection.classList.add("hidden");
    signupSection.classList.add("hidden");
    overlay.classList.add("hidden");
  })
);

const showCourses = document.querySelector(".courses");
showCourses.addEventListener("click", function (e) {
  e.preventDefault();
  if (!isLogged) {
    alert(
      "please, first login-in if you have signed up OR USE username:'fd',password:'0960' to login"
    );
    return;
  }
  window.open("../Course/index.html", "_self");
});
let curSlide = 2;
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const slider = document.querySelector(".slider");

// slider.style.overflow = "visible";
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - curSlide) * 100}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  curSlide++;
  if (curSlide === slides.length) curSlide = 0;

  goToSlide(curSlide);
};
setInterval(nextSlide, 3000);
const prevSlide = function () {
  curSlide--;
  if (curSlide === -1) curSlide = slides.length - 1;

  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
const footer = document.querySelector("footer");
const navig = document.querySelector(".navigation");
// const container = document.querySelector(".grid-2-cols");
const menubar = document.createElement("img");
menubar.src = "icons8-menu-rounded-50.png";
menubar.alt = "menubar-image-photo";
const nav = navig.querySelector("nav");
navig.append(menubar);
menubar.classList.add("hidden");
const closes = document.createElement("div");
closes.innerHTML = "<button >&times;</button>";
closes.classList.add("close-modal");
//for trying to correct error

const removeShow = function () {
  footer.classList.add("hidden");
  btnRight.classList.add("hidden");
  btnLeft.classList.add("hidden");
  slider.classList.add("hidden");
  closes.classList.remove("hidden");
  nav.classList.remove("links");
  nav.classList.add("hidden");
  nav.classList.add("show");
  nav.append(closes);
  closes.addEventListener("click", function () {
    nav.classList.remove("show");
    closes.classList.add("hidden");
    slider.classList.remove("hidden");
    btnLeft.classList.remove("hidden");
    btnRight.classList.remove("hidden");
    footer.classList.remove("hidden");
  });
};
const responsive = function () {
  if (window.innerWidth <= "900") {
    nav.classList.remove("links");
    nav.classList.add("hidden");
    menubar.style.display = "inline-block";

    // menubar.classList.add("menu-bar");
    menubar.addEventListener("click", removeShow);

    // this.removeEventListener("resize", responsive);
  } else {
    slider.classList.remove("hidden");
    btnLeft.classList.remove("hidden");
    btnRight.classList.remove("hidden");
    footer.classList.remove("hidden");
    closes.classList.add("hidden");
    nav.classList.add("links");
    nav.classList.remove("show");
    menubar.style.display = "none";

    menubar.removeEventListener("click", removeShow);
  }
};
responsive();
visualViewport.addEventListener("resize", responsive);
