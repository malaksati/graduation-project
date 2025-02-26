if (window.location.pathname === "/financial_affairs/details.html") {
document
  .getElementById("search-id")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    var id = document.getElementById("std-id").value;

    var students = [
      {
        id: 97544,
        name: "Ayman Moamed",
        level: 4,
        reg_year: 2021,
        fees: 18000,
        courses: [
          "Digital Signal Processing",
          "Software Engineering 2",
          "Project",
          "Microsystems",
          "Assembly Language",
        ],
        semester: "Fall 2024",
        college: "Computers & Artificial Intelligence",
        date: new Date().toISOString().split('T')[0],
        datetime: getFormattedDateTime()
      },
      {
        id: 97546,
        name: "Mohamed Hassan",
        level: 2,
        reg_year: 2022,
        fees: 20000,
        courses: [
          "Database Systems 1",
          "Computer Archeticture",
          "Multimedia",
          "Software Engineering 1",
          "Operating Systems",
          "Computer Networks 1",
        ],
        semester: "Fall 2024",
        college: "Computers & Artificial Intelligence",
        date: new Date().toISOString().split('T')[0],
        datetime: getFormattedDateTime()
      },
      {
        id: 97547,
        name: "Ali Ahmed",
        level: 1,
        reg_year: 2024,
        fees: 25000,
        courses: [
          "Introduction to Programming",
          "Introduction to Computer Science",
          "English 1",
          "Linear Algebra",
          "Mathematical Analysis 1",
          "Enterpreneur ship",
        ],
        semester: "Fall 2024",
        college: "Computers & Artificial Intelligence",
        date: new Date().toISOString().split('T')[0],
        datetime: getFormattedDateTime()
      },
    ];

    var info = document.getElementById("student-info");
    info.classList.remove("d-none");
    var std = students.find((std) => std.id == id);
    if (!std) {
      info.classList.add("d-none");
      alert("Student not found");
      return;
    } else {
      sessionStorage.setItem("studentFees", JSON.stringify(std));
      var studentinfo = document.getElementById("info-fees");
      let s = "";
      s += `<div class="col-md-6">
                            <p><strong>Student ID: </strong><span id="std-id">${std.id}</span></p>
                            <p><strong>Student Name: </strong><span id="std-name">${std.name}</span></p>
                            <p><strong>Level: </strong><span id="std-level">${std.level}</span></p>
                            <p><strong>Registered Year: </strong><span id="std-year">${std.reg_year}</span></p>
                        </div>
                        <div class="col-md-6">
                            <h4>New Courses: ${std.semester}</h4>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>`;
      std.courses.forEach((course) => {
        s += `<tr><td>${course}</td><td>3 hours</td></tr>`;
      });
      s += ` </tbody>
                            </table>
                            <p><strong>Total Hours:</strong> 18 </p>
                            <p><strong>Payments:</strong>${std.fees}</p></div>`;
      studentinfo.innerHTML = s;
    }
  });
}
if (window.location.pathname === "/financial_affairs/receipt.html") {
  var std = JSON.parse(sessionStorage.getItem("studentFees"));
  console.log(std)
  function generateReceiptNumber() {
    // Get the current date in YYYYMMDD format
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}${month}${day}`;

    // Generate a random 6-digit number
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // Ensures a 6-digit number

    // Combine "r", date, and random number to form the receipt number
    const receiptNumber = `R${formattedDate}${randomNumber}`;

    return receiptNumber;
  }

  // Example usage
  const receipt = generateReceiptNumber();
  document.getElementById("receiptNo").value = receipt;
  document.getElementById("college-name").value = std.college;
  document.getElementById("fees").value = std.fees;
  document.getElementById("date1").value = std.date;
  document.getElementById("date2").value = std.date;
  document.getElementById("date3").innerHTML = std.datetime;
  document.getElementById("name").value = std.name;
  document.getElementById("reg-year").value = std.reg_year;
  document.getElementById("level").value = std.level;
  document.getElementById("semester").innerHTML = std.semester;


}

function getFormattedDateTime() {
    const date = new Date();
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // Combine date and time
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  function sendReceipt() {
    const receiptNo = document.getElementById("receiptNo").value;
    const college = document.getElementById("college-name").value;
    const fees = document.getElementById("fees").value;
    const date = document.getElementById("date1").value;
    const name = document.getElementById("name").value;
    const regYear = document.getElementById("reg-year").value;
    const level = document.getElementById("level").value;
    const semester = document.getElementById("semester").innerHTML;
    const datetime = document.getElementById("date3").innerHTML;
    const finsignature = document.getElementById("finsignature").value;
    const finanName = document.getElementById("finanName").value;
    const feestext = document.getElementById("fees-text").value;

    const receipt = {
      receiptNo : receiptNo,
      college: college,
      feesNo: fees,
      date: date,
      stdName: name,
      regYear: regYear,
      level: level,
      semester: semester,
      dateTime: datetime,
      financeName: finanName,
      financeSignature: finsignature,
      feesText: feestext
    };
  
    // Send the receipt to the server
    sessionStorage.setItem("receipt", JSON.stringify(receipt));
    window.location.href = "details.html";
    
  }
