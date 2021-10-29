/*
1. Create:
  - index.html
  - style.css 
  - chart.js
2. Chart.js 
  - Dane startowe dla wykresu liniowego ze strony oficjalnej chart.js
  https://www.chartjs.org/docs/latest/getting-started/
3. Install chart.js
  - npm init -y
  - npm install chart.js
*/

var ctx = document.getElementById("myChart").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
                label: 'Zloty', // Name the series
                data: [4.44, 4.42, 4.50, 4.43, 4.49, 4.51, 4.55, 4.58, 4.59, 4.52], // Specify the data values array
                fill: false,
                borderColor: 'red', // Add custom color border (Line)
                backgroundColor: 'red', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            },
            {
                label: 'Dollar', // Name the series
                data: [1.27, 1.24, 1.20, 1.12, 1.18, 1.22, 1.25, 1.19, 1.15, 1.17], // Specify the data values array
                fill: false,
                borderColor: 'blue', // Add custom color border (Line)
                backgroundColor: 'blue', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            },
            {
                label: 'Pfund', // Name the series
                data: [0.88, 0.93, 0.86, 0.90, 0.96, 0.93, 0.88, 0.85, 0.91, 0.87], // Specify the data values array
                fill: false,
                borderColor: 'green', // Add custom color border (Line)
                backgroundColor: 'green', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }
        ]
    },
    options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});