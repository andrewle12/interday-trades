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
    for (var i = 0; i < lines.length; i++) {
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

      $("#chart").append(output);
    }
  }
});
