let signinLs = JSON.parse(localStorage.getItem("signin"));

document.querySelector("#logout").addEventListener("click", logOutFun);
function logOutFun() {
  signinLs = null;
  localStorage.setItem("signin", JSON.stringify(signinLs));
}
