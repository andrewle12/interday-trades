var options = {
  series: [
    {
      data: [
        {
          x: new Date(1443184200000),
          y: [239.99, 239.99, 237.37, 237.49]
        },
        {
          x: new Date(1443978000000),
          y: [239.1, 239.24, 239.1, 239.24]
        },
        {
          x: new Date(1445409000000),
          y: [268.6, 268.93, 267, 268.93]
        },
        {
          x: new Date(1449980100000),
          y: [430.47, 430, 425.01, 428.81]
        },
        {
          x: new Date(1459483200000),
          y: [415.69, 415.7, 415.36, 415.36]
        }
      ]
    }
  ],
  chart: {
    type: "candlestick",
    height: 350
  },
  title: {
    text: "CandleStick Chart",
    align: "left"
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
