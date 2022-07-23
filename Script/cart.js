let cartLS = JSON.parse(localStorage.getItem("cart-storage")) || [];
// console.log(cartLS);
display(cartLS);

function display(cartLS) {
  let amount = 0;
  document.querySelector("#container").innerHTML = "";
  cartLS.map(function (ele, index) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", ele.url);
    let h3 = document.createElement("h3");
    h3.innerText = ele.course;
    let h4 = document.createElement("h4");
    h4.innerText = "₹" + ele.price;

    let delet = document.createElement("button");
    delet.innerText = "Delete";
    delet.addEventListener("click", function () {
      deleteFun(ele, index);
    });
    div.append(image, h3, h4, delet);
    document.querySelector("#container").append(div);
    amount += +ele.price;
  });
  gst = Math.floor(0.09 * amount);
  total = amount + 2 * gst;
  document.querySelector("#amount").innerText = "₹ " + amount;
  document.querySelector("#cgst").innerText = "₹ " + gst;
  document.querySelector("#sgst").innerText = "₹ " + gst;

  document.querySelector("#Total").innerText = "₹ " + total;
  document.querySelector("form").addEventListener("click", function () {
    event.preventDefault();
    let enter = document.querySelector("#coupon").value;
    if (enter == "FIRSTCOURSE") {
      total = total * 0.8;
      total = total.toFixed(2);
      localStorage.setItem("Total", JSON.stringify(total));
      document.querySelector("#Total").innerText = "₹ " + total;
    }
  });
}

function deleteFun(ele, index) {
  cartLS.splice(index, 1);
  localStorage.setItem("cart-storage", JSON.stringify(cartLS));
  display(cartLS);
}
