let config = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "TOTAL REVENUE",
        data: revenueArray,
        borderColor: "#7ED321",
        fill: false,
        lineTension: 0
      },
      {
        label: "TOTAL COST",
        data: costArray,
        borderColor: "#D0021B",
        fill: false,
        lineTension: 0
      },
      {
        label: "NET INCOME",
        data: netArray,
        borderColor: "#4A90E2",
        fill: false,
        lineTension: 0
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: ""
    },
    tooltips: {
      mode: "point",
      intersect: false,
      animationDuration: 200
    },
    hover: {
      mode: "nearest",
      intersect: false
    },
    scales: {
      xAxes: [
        {
          display: true
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "$USD"
          }
        }
      ]
    },
    elements: {
      point: {
        radius: 0,
        borderWidth: 4
      }
    },
    legend: {
      display: true
    }
  }
};