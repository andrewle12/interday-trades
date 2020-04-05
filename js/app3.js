var options = {
  series: [
    {
      data: [
        { x: new Date(1443184200000), y: [239.99, 239.99, 237.37, 237.49] },
        { x: new Date(1443185100000), y: [237.49, 237.47, 237.36, 237.45] },
        { x: new Date(1443186000000), y: [237.45, 237.45, 237.45, 237.45] },
      ],
    },
  ],
  chart: {
    type: "candlestick",
    height: 350,
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  title: {
    text: "BTC M15 Candle",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
