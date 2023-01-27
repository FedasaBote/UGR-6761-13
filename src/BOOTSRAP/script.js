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
  signupSection.classList.add("hidden");
  overlay.classList.add("hidden");
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
