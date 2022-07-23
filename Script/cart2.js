let singinLs = JSON.parse(localStorage.getItem("signin"));
console.log(singinLs);
let sign = document.querySelector("#user");
if (singinLs != null) {
  sign.innerHTML = null;
  let userName = document.createElement("h1");
  userName.innerText = singinLs.personName;
  sign.append(userName);
}
