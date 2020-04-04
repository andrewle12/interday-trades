var options = {
  series: [
    {
      data: [
        { x: new Date(1443180000000), y: [239.99, 239.99, 237.37, 237.49] },
        { x: new Date(1443190000000), y: [237.49, 237.47, 237.36, 237.45] },
        { x: new Date(1443190000000), y: [237.45, 237.45, 237.45, 237.45] },
        { x: new Date(1443190000000), y: [237.45, 237.45, 237.45, 237.45] },
        { x: new Date(1443190000000), y: [237.45, 237.45, 237.45, 237.45] },
        { x: new Date(1443190000000), y: [237.45, 237.45, 236.08, 236.08] },
        { x: new Date(1443190000000), y: [236.08, 236.26, 236.1, 236.1] },
        { x: new Date(1443190000000), y: [236.1, 236.36, 236.1, 236.36] },
        { x: new Date(1443190000000), y: [236.36, 236.52, 236.25, 236.52] },
        { x: new Date(1443190000000), y: [236.52, 236.52, 236.34, 236.34] },
        { x: new Date(1443190000000), y: [236.34, 236.34, 235.44, 235.44] },
        { x: new Date(1443190000000), y: [235.44, 235.44, 235.44, 235.44] }
      ]
    }
  ],
  chart: {
    type: "candlestick",
    height: 350
  },
  title: {
    text: "BTC M15 Candle",
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
