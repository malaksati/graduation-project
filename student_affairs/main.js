if (window.location.pathname === "/student_affairs/manager/home.html") {
  var students = [
    {
      id: 1,
      Class: 2020,
      Name: "Ahmed Ali",
      CGPA: 3.5,
    },
    {
      id: 2,
      Class: 2020,
      Name: "Ali Ahmed",
      CGPA: 3.0,
    },
    {
      id: 3,
      Class: 2021,
      Name: "Sara Ali",
      CGPA: 3.8,
    },
    {
      id: 4,
      Class: 2021,
      Name: "Sana Ahmed",
      CGPA: 3.7,
    },
    {
      id: 5,
      Class: 2022,
      Name: "Ayesha Mohamed",
      CGPA: 3.9,
    },
    {
      id: 6,
      Class: 2022,
      Name: "Asma Ali",
      CGPA: 3.6,
    },
    {
      id: 7,
      Class: 2023,
      Name: "Zain Ahmed",
      CGPA: 3.3,
    },
    {
      id: 8,
      Class: 2023,
      Name: "Zara Ali",
      CGPA: 3.4,
    },
    {
      id: 9,
      Class: 2024,
      Name: "Soha Naser",
      CGPA: 3.1,
    },
    {
      id: 10,
      Class: 2024,
      Name: "Sohaib Naser",
      CGPA: 3.2,
    },
  ];

  var table = document.getElementById("std-stats");
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);

  students.forEach((std) => {
    var row = document.createElement("tr");

    var idCell = document.createElement("td");
    idCell.textContent = std.id;
    row.appendChild(idCell);

    var nameCell = document.createElement("td");
    nameCell.textContent = std.Name;
    row.appendChild(nameCell);

    var classCell = document.createElement("td");
    classCell.textContent = std.Class;
    row.appendChild(classCell);

    var cgpaCell = document.createElement("td");
    cgpaCell.textContent = std.CGPA;
    row.appendChild(cgpaCell);

    tbody.appendChild(row);
  });
}
if (window.location.pathname === "/student_affairs/applications.html") {
  const applications = [
    {
      id: 1,
      Date: "2021-10-01",
      FirstName: "Ahmed",
      MiddleName: "Naser",
      LastName: "Ali",
      Email: "ahmed1@g.com",
      Phone: "123456789",
      Address: "Cairo",
      College: "Computer Science & Artificial Intelligence",
      Birth: "2000-01-01",
      Gender: "Male",
    },
    {
      id: 2,
      Date: "2021-10-02",
      FirstName: "Ali",
      MiddleName: "Hassan",
      LastName: "Omar",
      Email: "ali2@g.com",
      Phone: "123456780",
      Address: "Alexandria",
      College: "Information Systems",
      Birth: "1999-05-10",
      Gender: "Male",
    },
    {
      id: 3,
      Date: "2021-10-03",
      FirstName: "Sara",
      MiddleName: "Mohamed",
      LastName: "Sami",
      Email: "sara3@g.com",
      Phone: "123456781",
      Address: "Giza",
      College: "Computer Science",
      Birth: "2001-04-15",
      Gender: "Female",
    },
    {
      id: 4,
      Date: "2021-10-04",
      FirstName: "Mona",
      MiddleName: "Khaled",
      LastName: "Adel",
      Email: "mona4@g.com",
      Phone: "123456782",
      Address: "Cairo",
      College: "Artificial Intelligence",
      Birth: "2000-09-21",
      Gender: "Female",
    },
    {
      id: 5,
      Date: "2021-10-05",
      FirstName: "Omar",
      MiddleName: "Ahmed",
      LastName: "Kareem",
      Email: "omar5@g.com",
      Phone: "123456783",
      Address: "Cairo",
      College: "Information Systems",
      Birth: "1998-11-01",
      Gender: "Male",
    },
    {
      id: 6,
      Date: "2021-10-06",
      FirstName: "Amina",
      MiddleName: "Youssef",
      LastName: "Saleh",
      Email: "amina6@g.com",
      Phone: "123456784",
      Address: "Alexandria",
      College: "Computer Science",
      Birth: "2002-03-12",
      Gender: "Female",
    },
    {
      id: 7,
      Date: "2021-10-07",
      FirstName: "Hassan",
      MiddleName: "Mahmoud",
      LastName: "Zaki",
      Email: "hassan7@g.com",
      Phone: "123456785",
      Address: "Giza",
      College: "Artificial Intelligence",
      Birth: "1997-06-25",
      Gender: "Male",
    },
    {
      id: 8,
      Date: "2021-10-08",
      FirstName: "Nour",
      MiddleName: "Saad",
      LastName: "Hamza",
      Email: "nour8@g.com",
      Phone: "123456786",
      Address: "Cairo",
      College: "Information Systems",
      Birth: "2003-08-18",
      Gender: "Female",
    },
    {
      id: 9,
      Date: "2021-10-09",
      FirstName: "Salma",
      MiddleName: "Adel",
      LastName: "Fathy",
      Email: "salma9@g.com",
      Phone: "123456787",
      Address: "Cairo",
      College: "Computer Science & Artificial Intelligence",
      Birth: "2000-02-05",
      Gender: "Female",
    },
    {
      id: 10,
      Date: "2021-10-10",
      FirstName: "Youssef",
      MiddleName: "Hany",
      LastName: "Farid",
      Email: "youssef10@g.com",
      Phone: "123456788",
      Address: "Alexandria",
      College: "Artificial Intelligence",
      Birth: "1999-12-30",
      Gender: "Male",
    },
  ];

  sessionStorage.setItem("appData", JSON.stringify(applications));

  var table = document.getElementById("applications");
  var tbody1 = document.createElement("tbody");
  table.appendChild(tbody1);

  applications.forEach((app) => {
    var row = document.createElement("tr");

    var idCell = document.createElement("td");
    idCell.textContent = app.id;
    row.appendChild(idCell);

    var dateCell = document.createElement("td");
    dateCell.textContent = app.Date;
    row.appendChild(dateCell);

    var nameCell = document.createElement("td");
    nameCell.textContent =
      app.FirstName + " " + app.MiddleName + " " + app.LastName;
    row.appendChild(nameCell);

    var collegeCell = document.createElement("td");
    collegeCell.textContent = app.College;
    row.appendChild(collegeCell);

    var openCell = document.createElement("td");

    var button1 = document.createElement("a");
    button1.textContent = "Open";
    button1.classList.add("btn", "btn-success"); // You can add multiple classes in one call
    button1.href = "application.html?id=" + app.id;

    // Append the button to the cell
    openCell.appendChild(button1);
    row.appendChild(openCell);

    tbody1.appendChild(row);
  });
}

if (window.location.pathname === "/student_affairs/receipts.html") {
  const receipts = [
    {
      id: 1,
      std_id: 97544,
      name: "Ayman Mohamed",
      payment: 18000 
    },
    {
      id: 2,
      std_id: 97545,
      name: "Mohamed Ali",
      payment: 20000 
    },
    {
      id: 3,
      std_id: 97546,
      name: "Ahmed Hassan",
      payment: 15000 
    },
    {
      id: 4,
      std_id: 97547,
      name: "Sara Ahmed",
      payment: 17000 
    },
    {
      id: 5,
      std_id: 97548,
      name: "Nada Mohamed",
      payment: 19000 
    },
    {
      id: 6,
      std_id: 97549,
      name: "Ali Ahmed",
      payment: 16000 
    },
    {
      id: 7,
      std_id: 97550,
      name: "Hassan Ali",
      payment: 21000 
    },
    {
      id: 8,
      std_id: 97551,
      name: "Sara Ali",
      payment: 22000 
    },
    {
      id: 9,
      std_id: 97552,
      name: "Nada Hassan",
      payment: 23000 
    },
    {
      id: 10,
      std_id: 97553,
      name: "Ahmed Ali",
      payment: 24000 
    }
  ];
  sessionStorage.setItem("receiptData", JSON.stringify(receipts));

  var table = document.getElementById("receipts");
  var tbody1 = document.createElement("tbody");
  table.appendChild(tbody1);

  receipts.forEach((receipt) => {
    var row = document.createElement("tr");

    var idCell = document.createElement("td");
    idCell.textContent = receipt.id;
    row.appendChild(idCell);

    var std_id = document.createElement("td");
    std_id.textContent = receipt.std_id;
    row.appendChild(std_id);

    var nameCell = document.createElement("td");
    nameCell.textContent = receipt.name;
    row.appendChild(nameCell);

    var payCell = document.createElement("td");
    payCell.textContent = receipt.payment;
    row.appendChild(payCell);

    var openCell = document.createElement("td");
    openCell.classList.add("d-flex", "justify-content-around", "align-items-center");
    var button1 = document.createElement("button");
    button1.textContent = "Accept";
    button1.classList.add("btn", "btn-success", "btn-sm"); // You can add multiple classes in one call
    button1.addEventListener("click", function () {
      alert("Payment Accepted");
    });
    var button2 = document.createElement("button");
    button2.textContent = "Reject";
    button2.classList.add("btn", "btn-danger", "btn-sm"); // You can add multiple classes in one call
    button2.addEventListener("click", function () {
      alert("Payment Rejected");
    });

    // Append the button to the cell
    openCell.appendChild(button1);
    openCell.appendChild(button2);
    row.appendChild(openCell);

    tbody1.appendChild(row);
  });
}