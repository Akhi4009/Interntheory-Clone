document.querySelector("form").addEventListener("submit", storeData);

let arrData = JSON.parse(localStorage.getItem("sign_up")) || [];
console.log(arrData);

function storeData() {
  event.preventDefault();
  let obj = {
    personName: document.querySelector("#name").value,
    personEmail: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    moblileNumber: document.querySelector("#mbl").value,
    personCity: document.querySelector("#city").value,
    personSearch: document.querySelector("#search").value,
    PersonIntrest: document.querySelector("#intrested").value,
  };
  if (
    obj.personName == "" ||
    obj.personEmail == "" ||
    obj.moblileNumber == "" ||
    obj.password == ""
  ) {
    alert("Please fill all the data");
    return;
  }
  let res = false;
  arrData.map(function (ele) {
    if (
      ele.personEmail == obj.personEmail ||
      ele.moblileNumber == obj.moblileNumber
    ) {
      alert("This email or mobile number was already used ");
      res = true;
    }
  });
  if (res == true) {
    return;
  }
  arrData.push(obj);

  localStorage.setItem("sign_up", JSON.stringify(arrData));
}
