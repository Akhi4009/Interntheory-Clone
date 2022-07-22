let data = [
  {
    url: "https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
    course: "IT Starter Pack (4 Courses)",
    description:
      "Learn the most demanded skills in the IT industry today. Sig ...",
    price: "15999",
  },
  {
    url: "	https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png",
    course: "Digital Marketing Course",
    description:
      "Learn the art of digital marketing. Sign up for this online ...",
    price: "5999",
  },
  {
    url: "https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png	",
    course: "Data Analytics With R Programming Course",
    description:
      "Learn data science online. Join this online data analytics c ...",

    price: "5999",
  },
  {
    url: "https://assets.interntheory.com/creative/courses/thumbnails/web-development-course.png",
    course: "Web Development Course",
    description:
      "Learn the art of web design and web development. Join this o ...",
    price: "3999",
  },
  {
    url: "https://assets.interntheory.com/creative/courses/thumbnails/tally-gst-course.png",
    course: "Tally + GST Course",
    description:
      "Sign up for this online tally and gst course and learn how t ...",
    price: "3999",
  },
  {
    url: "https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png	",
    course: "Android App Development Using Kotlin Course",
    description:
      "Learn the art of android app design and web development. Joi ...",
    price: "3999",
  },
  {
    url: "https://assets.interntheory.com/creative/courses/thumbnails/advanced-excel-course.png",
    course: "Advanced Excel Course",
    description:
      "Master MS Excel. Take the online ms excel course and learn t ...",
    price: "2999",
  },
  {
    url: "https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png",
    course: "R Programming Course",
    description:
      "Learn r programming online. Sign up for this online r progra ...",
    price: "2999",
  },
];
display(data);

let cartLS = JSON.parse(localStorage.getItem("cart-storage")) || [];
function display(data) {
  document.querySelector("#container").innerHTML = "";
  data.map(function (ele) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", ele.url);
    let h2 = document.createElement("h2");
    h2.innerText = ele.course;
    let p = document.createElement("p");
    p.innerText = ele.description;
    let h3 = document.createElement("h3");
    h3.innerText = "₹ " + ele.price;

    let cart = document.createElement("button");
    cart.innerText = "Add to cart";
    cart.addEventListener("click", function () {
      addToCart(ele);
    });
    div.append(image, h2, p, h3, cart);
    document.querySelector("#container").append(div);
  });
}
function addToCart(ele) {
  cartLS.push(ele);
  alert("product added to cart");
  localStorage.setItem("cart-storage", JSON.stringify(cartLS));
}
