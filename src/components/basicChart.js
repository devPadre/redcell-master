$(function(){
    var chartData = {
        labels: ["Jekyll", "Hugo", "Wintersmith"],
        datasets: [
            {
                label: "Mean build time",
                fillColor: "#E1EDD7",
                strokeColor: "#E1EDD7",
                highlightFill: "#C1D8AB",
                highlightStroke: "#C1D8AB",
                data: [784, 100, 5255]
            }
        ]
    };
  
    var ctx = $('#basicChart').get(0).getContext("2d");
    var myBarChart = new Chart(ctx).Bar(chartData, {
        scaleBeginAtZero : true,
        responsive: true,
        maintainAspectRatio: false,
      }
    );
    })