document.querySelector("form").addEventListener("submit", contactDataFunc);
let contactData = JSON.parse(localStorage.getItem("contct_data")) || [];

function contactDataFunc() {
  event.preventDefault();
  let obj = {
    email: document.querySelector("#email").value,
    mbl: document.querySelector("#mbl").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#msg").value,
  };
  //console.log(obj);
  if (
    obj.email == "" ||
    obj.mbl == "" ||
    obj.subject == "" ||
    obj.message == ""
  ) {
    alert(`Please fill all data`);
    return;
  } else {
    alert(`We will contact you soon`);
  }
  contactData.push(obj);
  localStorage.setItem("contct_data", JSON.stringify(contactData));
  window.location.href = "/day-2/index.html";
}
