function sendData() {
  const list = document.getElementById("list").value;
  const level = document.getElementById("level").value;
  const semester = document.getElementById("semester").value;
  const checkboxes = document.querySelectorAll(".course:checked");
  const courses = Array.from(checkboxes).map((cb) => cb.value);

  sessionStorage.setItem("list", list);
  sessionStorage.setItem("level", level);
  sessionStorage.setItem("semester", semester);
  sessionStorage.setItem("courses", courses);

  window.location.href = "default_schedule.html";
}
const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

function addRow(day) {
  let table = document
    .getElementById("scheduleTable")
    .getElementsByTagName("tbody")[0];
  let rowCount = table.rows.length; // Get current row count

  // Create a new row
  let newRow = table.insertRow();

  // Insert cells into the row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let cell6 = newRow.insertCell(5);
  let cell7 = newRow.insertCell(6);
  cell7.classList.add("plus");

  // Set cell content
  cell1.innerHTML = `<select class="input-schedule code_co" name="code-${day}"></select>`; // Row number
  cell2.innerHTML = `<select class="input-schedule title" name="course-${day}"></select>`;
  cell3.innerHTML = `<input type="text" class="input-schedule" name="instructor-${day}" placeholder="Instructor">`;
  cell4.innerHTML = `<input type="text" class="input-schedule" name="place-${day}" placeholder="Place">`;
  cell5.innerHTML = `<select name="type-${day}" class="input-schedule" id="">
                                <option value="L">L</option>
                                <option value="Ex">Ex</option>
                                <option value="Lab">Lab</option>
                            </select>`;
  cell6.innerHTML = `<select name="time-${day}" class="input-schedule">
                                <option value="1">09:00 - 10:15</option>
                                <option value="2">10:20 - 11:35</option>
                                <option value="3">11:40 - 12:55</option>
                                <option value="4">13:00 - 14:15</option>
                                <option value="5">14:20 - 15:35</option>
                            </select>`;
  cell7.innerHTML = `<button onclick="addRow()" class="btn"><i class="fa-solid fa-plus"></i></button>`;
  const strcourses = sessionStorage.getItem("courses");
  let courses = strcourses.split(",");
  courses.forEach((course, index) => {
    if (document.querySelectorAll(".code_co").values.length == 0) {
      document.querySelectorAll(".code_co").forEach((v) => {
        v.innerHTML += `<option value="${index + 1}">${index + 1}</option>`;
      });
    }
    if (document.querySelectorAll(".title").values.length == 0) {
      document.querySelectorAll(".title").forEach((v) => {
        v.innerHTML += `<option value="${index + 1}">${course}</option>`;
      });
    }
  });
}

// Handle form submission
document
  .getElementById("schedule-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let scheduleData = [];

    days.forEach((day) => {
      let codeElements = document.getElementsByName(`code-${day}[]`);
      let courseElements = document.getElementsByName(`course-${day}[]`);
      let instructorElements = document.getElementsByName(
        `instructor-${day}[]`
      );
      let placeElements = document.getElementsByName(`place-${day}[]`);
      let typeElements = document.getElementsByName(`type-${day}[]`);
      let timeElements = document.getElementsByName(`time-${day}[]`);

      let daySchedule = [];

      for (let i = 0; i < codeElements.length; i++) {
        daySchedule.push({
          code: codeElements[i].value,
          course: courseElements[i].value,
          instructor: instructorElements[i].value,
          place: placeElements[i].value,
          type: typeElements[i].value,
          time: timeElements[i].value,
        });
      }

      if (daySchedule.length > 0) {
        scheduleData.push({ day, courses: daySchedule });
      }
    });

    // console.log("Schedule Data:", scheduleData); // Debugging
    // window.location.href = "dashboard.html"
    // let apiUrl = "https://yourapi.com/api/schedule"; // Replace with your actual .NET API endpoint

    // try {
    //     let response = await fetch(apiUrl, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ schedule: scheduleData })
    //     });

    //     let result = await response.json();
    //     document.getElementById("responseMessage").innerText = "Success: " + result.message;

    // } catch (error) {
    //     console.error("Error:", error);
    //     document.getElementById("responseMessage").innerText = "Error submitting schedule.";
    // }
  });
