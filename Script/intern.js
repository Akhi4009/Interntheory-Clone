let data = [
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg",
    role: "Digital Marketing Intern",
    company: "Bombay Hemp Company (BOHECO) Pvt. Ltd.",
    intern_type: "Full Time Internship",
    job_type: "Digital Marketing",

    location: "Mumbai",
    salary: "Stipend: Expenses Covered",
    time: "4 weeks left ",
  },

  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg",
    role: "Sales Officer",
    company: "Laugh Out Loud Ventures",
    intern_type: "Part Time,Work From Home Internship",
    job_type: "Marketing",
    location: "Bangalore",
    salary: "Stipend: 3000 - 6000 per month",
    time: "4 weeks left ",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/a30e1719ac92c7cc8dd7d23f20c574e71e7389ea.jpg",
    role: "Finance Intern",
    company: "GetVantage",
    intern_type: "Full Time Internship",
    job_type: "Finance",
    location: "Mumbai",
    salary: "Stipend: 5000 per month",
    time: "4 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/cc34fde75acc08b93947f63609b97ad2646a16ce.jpg",
    role: " Client Serving",
    company: "BOTTOMLINE MEDIA PVT LTD",
    intern_type: "Full Time Internship",
    job_type: "Marketing",
    location: "Mumbai",
    salary: "Stipend: 5000 per month",
    time: "4 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/9290019103f3310fa96383f55b56c749eb6ef9dd.jpg",
    role: "Search Engine Optimization Internship",
    company: "Aaroniz Technology",
    intern_type: "Work From Home Internship",
    job_type: "SEO",
    location: "Pune",
    salary: "Stipend: 1000 per month",
    time: "3 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/b1d37ce6289d72ee624d65f8422795a903a71a6f/68afb2eae34f20db5e41a3964d2b407fd7648131com.jpg",
    role: "Business Development Intern",
    company: "EVAVO WELLNESS & SOLUTIONS LLP",
    intern_type: "Full Time Internship",
    job_type: "Business Development",
    location: "Lucknow",
    salary: "Stipend: 8000 - 14000 per month",
    time: "3 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/e1822db470e60d090affd0956d743cb0e7cdf113/f9d920bb5121b4f9bd050ef51143a49c83601f73com.png",

    role: "Monitoring and Evaluation Volunteer",
    company: "Atma",
    intern_type: "Part Time Internship",
    job_type: "Monitoring And Evalution Volunteer",
    location: "Banglore",
    salary: "Stipend: None",
    time: "3 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/e1822db470e60d090affd0956d743cb0e7cdf113/f9d920bb5121b4f9bd050ef51143a49c83601f73com.png",

    role: "Monitoring and Evaluation Volunteer",
    company: "Atma",
    intern_type: "Part Time Internship",
    job_type: "Marketing",
    location: "Banglore",
    salary: "Stipend: None",
    time: "3 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/e1822db470e60d090affd0956d743cb0e7cdf113/f9d920bb5121b4f9bd050ef51143a49c83601f73com.png",

    role: "Monitoring and Evaluation Volunteer",
    company: "Atma",
    intern_type: "Part Time Internship",
    job_type: "Human Resources",
    location: "Lucknow",
    salary: "Stipend: None",
    time: "3 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/bf3174743fe71c1e3028caabc90044f486d5bc7b.jpg",
    role: "Quality Assurance",
    company: "HomeCapital",
    intern_type: "Part Time Internship",
    job_type: "Software Development",
    location: "Noida",
    salary: "Stipend: 8000 - 14000 per month",
    time: "2 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/53c7bc413d6a1.jpg",
    role: "Global HR Intern",
    company: "Cactus Communications",
    intern_type: "Part Time Internship",
    job_type: "Human Resources",
    location: "Delhi",
    salary: "Stipend: 8000 - 14000 per month",
    time: "2 weeks left",
  },
];
display(data);
document.querySelector("#city").addEventListener("change", handleCity);

function handleCity() {
  let selected = document.querySelector("#city").value;
  if (selected == "") {
    display(data);
  } else {
    let filterList = data.filter(function (ele) {
      return ele.location == selected;
    });
    display(filterList);
  }
}
document.querySelector("#internType").addEventListener("change", handleType);

function handleType() {
  let selected = document.querySelector("#internType").value;
  if (selected == "") {
    display(data);
  } else {
    let filterList = data.filter(function (ele) {
      return ele.intern_type == selected;
    });
    display(filterList);
  }
}

document
  .querySelector("#preference")
  .addEventListener("change", handlePreference);

function handlePreference() {
  let selected = document.querySelector("#preference").value;
  if (selected == "") {
    display(data);
  } else {
    let filterList = data.filter(function (ele) {
      return ele.job_type == selected;
    });
    display(filterList);
  }
}

function display(data) {
  document.querySelector("#container").innerHTML = "";
  data.map(function (ele) {
    let div = document.createElement("div");
    let div1 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", ele.image_url);
    div1.append(image);
    let divTwo = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = ele.role;
    let h6 = document.createElement("h6");

    h6.innerText = ele.company;
    h6.style.fontSize = "15px";
    let p5 = document.createElement("p");
    p5.innerText = ele.intern_type;
    let p1 = document.createElement("p");
    p1.innerText = ele.job_type;
    let p2 = document.createElement("p");
    p2.innerText = ele.location;
    let p3 = document.createElement("p");
    p3.innerText = ele.salary;
    divTwo.append(h4, h6, p5, p1, p2, p3);
    let div3 = document.createElement("div");
    let p4 = document.createElement("p");
    p4.innerText = ele.time;
    let anc = document.createElement("a");
    anc.setAttribute("href", "");

    let apply = document.createElement("button");
    apply.innerText = "VIEW AND APPLY";

    anc.append(apply);
    div3.append(p4, anc);
    div.append(div1, divTwo, div3);
    document.querySelector("#container").append(div);
  });
}

function show() {
  document.querySelector("#side-bar").classList.toggle("active");
}
