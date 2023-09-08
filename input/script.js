// for charts
var ctx = document.getElementById("chart1").getContext("2d");
var ctx2 = document.getElementById("chart2").getContext("2d");
var ctx3 = document.getElementById("chart3").getContext("2d");
var ctx4 = document.getElementById("chart4").getContext("2d");
var ctx5 = document.getElementById("chart5").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number of sales",
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var myChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number of sales",
        data: [12, 20, 13, 74, 85, 14],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var myChart3 = new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number of sales",
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var myChart4 = new Chart(ctx4, {
  type: "radar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number of sales",
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var myChart5 = new Chart(ctx5, {
  type: "doughnut",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Number of sales",
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {},
  },
});
// for charts

// for menubar
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  document.querySelector(".menuNavBar").classList.remove("-translate-y-400%");
});
document.querySelector(".closeBtn").addEventListener("click", () => {
  document.querySelector(".menuNavBar").classList.add("-translate-y-400%");
});
// for menubar
