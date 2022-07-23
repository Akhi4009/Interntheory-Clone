let total = JSON.parse(localStorage.getItem("Total"));
document.querySelector("#totalAmount").innerText = total;

document.querySelector("form").addEventListener("submit", paymentFun);

function paymentFun() {
  event.preventDefault();
  let obj = {
    cardNumber: document.querySelector("#cardNumber").value,
    Expiry: document.querySelector("#expiry").value,
    name: document.querySelector("#name").value,
    cvv: document.querySelector("#cvv").value,
  };
  console.log(obj);
  if (
    obj.cardNumber == "" ||
    obj.Expiry == "" ||
    obj.name == "" ||
    obj.cvv == ""
  ) {
    alert("Please fill all the data");
    return;
  } else {
    alert(`Payment compleeted. Your item is arrived shortly. `);
    window.location.href = "/day-2/index.html";
  }
}
