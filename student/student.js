var days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

var thead = `<thead>
                        <tr class="table-secondary">
                            <th>Code</th>
                            <th>Course Title</th>
                            <th>Instructor</th>
                            <th>Place</th>
                            <th>Type</th>
                            <th>Time</th>
                        </tr>
                    </thead>`;

var scheduleday
days.forEach(day => {
    scheduleday = {
        day: day,
        data: [
            {
                code: "CS101",
                title: "Introduction to Computer Science",
                instructor: "Dr. Ahmed",
                place: "C3-102",
                type: "Lecture",
                time: "10:00 - 11:30"
            },
            {
                code: "CS102",
                title: "Data Structures",
                instructor: "Dr. Mohamed",
                place: "C3-102",
                type: "Lecture",
                time: "12:00 - 13:30"
            },
            {
                code: "CS103",
                title: "Algorithms",
                instructor: "Dr. Ahmed",
                place: "C3-102",
                type: "Lecture",
                time: "14:00 - 15:30"
            }
        ]
    }
})
