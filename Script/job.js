let data = [
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/1e4070e97f106397ef4cbb97c5ee51063c886d05.jpg",
    role: "Laravel Developer",
    company: "Indiumplus Financial Services Pvt Ltd",
    job_type: "Software Development",
    location: "Mumbai",
    salary: "Salary: 50000 - 60000 per month",
    time: "3 weeks left",
  },

  {
    image_url:
      "https://assets.interntheory.com/uploads/company/companylogos/e6d22059b45e45d9ccca527c74ef73954726f21e/a5f67648b11d6f06617857c7a43393f82b82ad9dcom.png",
    role: "Customer Success Executive",
    company: "Zell Education",
    job_type: "Operations",
    location: "Mumbai",
    salary: "Salary: 25000 - 35000 per month",
    time: "3 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg",
    role: "UX designer",
    company: "arham labs",
    job_type: "Digital Designing",
    location: "Mumbai",
    salary: "Salary: 40000 - 60000 per month",
    time: "3 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg",
    role: "Laravel Developer",
    company: "arham labs",
    job_type: "Web Design And Development",
    location: "Mumbai",
    salary: "Salary: 40000 - 60000 per month",
    time: "2 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/bf3174743fe71c1e3028caabc90044f486d5bc7b.jpg",
    role: "UI Designer",
    company: "HomeCapital",
    job_type: "Digital Designing",
    location: "Delhi",
    salary: "Salary: 40000 - 60000 per month",
    time: "1 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/0b27fd3c3939c9f43653b65a93cfc9fb85b9095d.jpg",
    role: "Senior Content Writer",
    company: "Post Card Media",
    job_type: "Content Writing",
    location: "Lucknow",
    salary: "Salary: 40000 - 60000 per month",
    time: "1 weeks left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/bf3174743fe71c1e3028caabc90044f486d5bc7b.jpg",
    role: "Data Analytics Engineer",
    company: "HomeCapital",
    job_type: "Data Analysts",
    location: "Banglore",
    salary: "Salary: 65000 - 80000 per month",
    time: "3 days left",
  },
  {
    image_url:
      "https://assets.interntheory.com/uploads/company/logos/bf3174743fe71c1e3028caabc90044f486d5bc7b.jpg",
    role: "Quality Assurance",
    company: "HomeCapital",
    job_type: "Software Development",
    location: "Noida",
    salary: "Salary: 70000 - 100000 per month",
    time: "2 days left",
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
    h6.style.fontSize = "15px";
    h6.innerText = ele.company;
    let p1 = document.createElement("p");
    p1.innerText = ele.job_type;
    let p2 = document.createElement("p");
    p2.innerText = ele.location;
    let p3 = document.createElement("p");
    p3.innerText = ele.salary;
    divTwo.append(h4, h6, p1, p2, p3);
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
