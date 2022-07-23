let arr = JSON.parse(localStorage.getItem("sign_up")) || [];
//console.log(arrData);
//console.log(arr.length);

document.querySelector("form").addEventListener("submit", signinFun);

function signinFun() {
  event.preventDefault();
  if (arr.length == 0) {
    alert("No user till now");
    return;
  }
  let obj = {
    perNmae: document.querySelector("#name").value,
    perPass: document.querySelector("#password").value,
  };
  let res = false;
  arr.map(function (ele) {
    if (ele.personName === obj.perNmae && ele.password === obj.perPass) {
      localStorage.setItem("signin", JSON.stringify(ele));
      alert("log in successfull");
      res = true;
      window.location.href = "/day-2/index.html";
    }
  });
  if (res == false) {
    alert("Please enter correct name and password ");
  }
}
