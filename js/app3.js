var points = [];
$(document).ready(function () {
  // AJAX in the data file
  $.ajax({
    type: "GET",
    url: "../BTC_M15_Candle_2020.csv",
    dataType: "text",
    success: function (data) {
      processData(data);
    },
  });

  // Let's process the data from the data file
  function processData(data) {
    var lines = data.split(/\r\n|\n/);

    //Set up the data arrays
    var epochTime = [];
    var opened = [];
    var high = [];
    var low = [];
    var closed = [];

    // var headings = lines[0].split(","); // Splice up the first row to get the headings

    for (var j = 0; j < lines.length; j++) {
      var values = lines[j].split(","); // Split up the comma seperated values
      // We read the key,1st, 2nd and 3rd rows
      epochTime.push(values[0]); // Read in as string
      // Recommended to read in as float, since we'll be doing some operations on this later.
      opened.push(parseFloat(values[1]));
      high.push(parseFloat(values[2]));
      low.push(parseFloat(values[3]));
      closed.push(parseFloat(values[4]));
    }

    // For display
    for (var i = 0; i < lines.length - 1; i++) {
      var output = [];
      output =
        "{x: new Date(" +
        epochTime[i] +
        "), " +
        "y: [" +
        opened[i] +
        ", " +
        high[i] +
        ", " +
        low[i] +
        ", " +
        closed[i] +
        "]},";

      points[i] = output;
      // $("#chart").append(output);
      // Use this to write on site
    }
  }
});
console.log(points);
var options = {
  series: [
    {
      //   data: [
      //     { x: new Date(1443184200000), y: [239.99, 239.99, 237.37, 237.49] },
      //     { x: new Date(1443185100000), y: [237.49, 237.47, 237.36, 237.45] },
      //     { x: new Date(1443186000000), y: [237.45, 237.45, 237.45, 237.45] },
      //   ],
      data: points,
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
