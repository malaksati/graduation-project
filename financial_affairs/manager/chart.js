// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Data for the chart
    const labels = [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025"
    ];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Student Enrollments in Computer Science last 10 years",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(17, 105, 163)",
                borderWidth: 1,
                data: [150, 300, 250, 300, 350, 400, 650, 800, 900],
            },
        ],
    };

    // Chart configuration
    const config = {
        type: "line",
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    };

    // Render the chart
    const salesChart = new Chart(document.getElementById("salesChart"), config);
}); 