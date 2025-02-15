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
